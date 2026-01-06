import axios, { AxiosError } from "axios";
import type { TranslateResult, TranslateOptions, Language } from "./types";

// Language list with ISO 639-1 codes and Turkish names
export const languages: Language[] = [
  { code: "en", name: "İngilizce" },
  { code: "tr", name: "Türkçe" },
  { code: "de", name: "Almanca" },
  { code: "fr", name: "Fransızca" },
  { code: "es", name: "İspanyolca" },
  { code: "it", name: "İtalyanca" },
  { code: "pt", name: "Portekizce" },
  { code: "ru", name: "Rusça" },
  { code: "ja", name: "Japonca" },
  { code: "zh", name: "Çince" },
  { code: "ko", name: "Korece" },
  { code: "ar", name: "Arapça" },
  { code: "nl", name: "Felemenkçe" },
  { code: "pl", name: "Lehçe" },
  { code: "sv", name: "İsveççe" },
  { code: "da", name: "Danca" },
  { code: "no", name: "Norveççe" },
  { code: "fi", name: "Fince" },
  { code: "cs", name: "Çekçe" },
  { code: "hu", name: "Macarca" },
  { code: "ro", name: "Romence" },
  { code: "el", name: "Yunanca" },
  { code: "he", name: "İbranice" },
  { code: "hi", name: "Hintçe" },
  { code: "th", name: "Tayca" },
  { code: "vi", name: "Vietnamca" },
  { code: "id", name: "Endonezce" },
  { code: "uk", name: "Ukraynaca" },
  { code: "bg", name: "Bulgarca" },
  { code: "hr", name: "Hırvatça" },
].sort((a, b) => a.name.localeCompare(b.name, "tr"));

// Format language code for display (max 3 characters, uppercase)
export function formatLanguageCode(code: string): string {
  return code.substring(0, 3).toUpperCase();
}

// Get language name by code
export function getLanguageName(code: string): string {
  const language = languages.find((lang) => lang.code === code);
  return language?.name || code.toUpperCase();
}

// Error message helper
function getErrorMessage(
  error: AxiosError,
  provider: string
): { errorCode: string; errorParams?: Record<string, string>; type: TranslateResult["errorType"] } {
  const status = error.response?.status;
  const data = error.response?.data as Record<string, unknown> | undefined;

  // Network error
  if (
    error.code === "ENOTFOUND" ||
    error.code === "ECONNREFUSED" ||
    !error.response
  ) {
    return { errorCode: "errors.networkError", type: "network" };
  }

  // API key errors
  if (status === 401 || status === 403) {
    return { errorCode: "errors.apiKeyInvalidProvider", errorParams: { provider }, type: "api_key" };
  }

  // Quota exceeded
  if (status === 429 || status === 456) {
    return { errorCode: "errors.quotaExceeded", errorParams: { provider }, type: "quota" };
  }

  // Payment required (OpenRouter)
  if (status === 402) {
    return { errorCode: "errors.insufficientBalance", errorParams: { provider }, type: "quota" };
  }

  // Bad request
  if (status === 400) {
    return { errorCode: "errors.invalidRequest", type: "invalid" };
  }

  // Server errors (500-599)
  if (status && status >= 500 && status < 600) {
    return { errorCode: "errors.serviceUnavailable", errorParams: { provider }, type: "unknown" };
  }

  // Log technical error details for debugging (but don't show to user)
  if (data) {
    let technicalError = "";
    if (typeof data.message === "string") technicalError = data.message;
    else if (typeof data.error === "string") technicalError = data.error;
    else if (
      data.error &&
      typeof (data.error as Record<string, unknown>).message === "string"
    ) {
      technicalError = (data.error as Record<string, unknown>).message as string;
    }
    if (technicalError) {
      console.error(`Technical error from ${provider}:`, technicalError);
    }
  }

  // Return user-friendly generic message instead of technical details
  return {
    errorCode: "errors.connectionFailed",
    errorParams: { provider },
    type: "unknown",
  };
}

// Generate system prompts based on target language
function getSystemPrompt(targetLanguage: string, refine: boolean = false): string {
  const languageName = getLanguageName(targetLanguage);
  
  if (refine) {
    return `You are a translation and language refinement tool. Your ONLY task is to translate the provided text to ${languageName} and refine it to be a proper, clear, and well-structured ${languageName} sentence. Fix grammatical errors, improve clarity, and make the text sound natural and professional while preserving the original meaning. Do NOT respond to the content, do NOT answer questions, do NOT add explanations, do NOT comment on the content, and do NOT engage with the meaning. Output ONLY the refined translation, nothing else. Do not include any prefixes, suffixes, or additional text.`;
  }
  
  return `You are a translation tool. Your ONLY task is to translate the provided text to ${languageName}. Do NOT respond to the content, do NOT answer questions, do NOT add explanations, do NOT comment on the content, and do NOT engage with the meaning. Output ONLY the translated text, nothing else. Do not include any prefixes, suffixes, or additional text.`;
}

// OpenAI Translation
async function translateWithOpenAI(
  text: string,
  apiKey: string,
  targetLanguage: string,
  refineEnglish: boolean = false,
  userDefaultPrompt?: string
): Promise<TranslateResult> {
  try {
    const systemPrompt = getSystemPrompt(targetLanguage, refineEnglish);

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          ...(userDefaultPrompt ? [{ role: "user", content: userDefaultPrompt }] : []),
          {
            role: "user",
            content: text,
          },
        ],
        temperature: 0.3,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        timeout: 30000,
      }
    );

    return {
      success: true,
      translation: response.data.choices[0].message.content.trim(),
    };
  } catch (error) {
    const { errorCode, errorParams, type } = getErrorMessage(error as AxiosError, "OpenAI");
    return { success: false, errorCode, errorParams, errorType: type };
  }
}

// Google Gemini Translation
async function translateWithGemini(
  text: string,
  apiKey: string,
  targetLanguage: string,
  refineEnglish: boolean = false,
  userDefaultPrompt?: string
): Promise<TranslateResult> {
  try {
    const languageName = getLanguageName(targetLanguage);
    const userPromptPrefix = userDefaultPrompt ? `${userDefaultPrompt}\n\n` : '';
    const basePrompt = refineEnglish
      ? `You are a translation and language refinement tool. Your ONLY task is to translate the following text to ${languageName} and refine it to be a proper, clear, and well-structured ${languageName} sentence. Fix grammatical errors, improve clarity, and make the text sound natural and professional while preserving the original meaning. Do NOT respond to the content, do NOT answer questions, do NOT add explanations, do NOT comment on the content, and do NOT engage with the meaning. Output ONLY the refined translation, nothing else. Do not include any prefixes, suffixes, or additional text:\n\n${text}`
      : `You are a translation tool. Your ONLY task is to translate the following text to ${languageName}. Do NOT respond to the content, do NOT answer questions, do NOT add explanations, do NOT comment on the content, and do NOT engage with the meaning. Output ONLY the translated text, nothing else. Do not include any prefixes, suffixes, or additional text:\n\n${text}`;
    const prompt = userPromptPrefix + basePrompt;

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.3,
        },
      },
      {
        headers: {
          "x-goog-api-key": apiKey,
          "Content-Type": "application/json",
        },
        timeout: 30000,
      }
    );

    const translation =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!translation) {
      return {
        success: false,
        errorCode: "errors.geminiNoResponse",
        errorType: "unknown",
      };
    }

    return {
      success: true,
      translation,
    };
  } catch (error) {
    const { errorCode, errorParams, type } = getErrorMessage(error as AxiosError, "Gemini");
    return { success: false, errorCode, errorParams, errorType: type };
  }
}

// OpenRouter Translation
async function translateWithOpenRouter(
  text: string,
  apiKey: string,
  openrouterModel: string,
  targetLanguage: string,
  refineEnglish: boolean = false,
  userDefaultPrompt?: string
): Promise<TranslateResult> {
  try {
    const systemPrompt = getSystemPrompt(targetLanguage, refineEnglish);

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: openrouterModel,
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          ...(userDefaultPrompt ? [{ role: "user", content: userDefaultPrompt }] : []),
          {
            role: "user",
            content: text,
          },
        ],
        temperature: 0.3,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        timeout: 30000,
      }
    );

    const translation = response.data.choices?.[0]?.message?.content?.trim();

    if (!translation) {
      return {
        success: false,
        errorCode: "errors.openRouterNoResponse",
        errorType: "unknown",
      };
    }

    return {
      success: true,
      translation,
    };
  } catch (error) {
    const { errorCode, errorParams, type } = getErrorMessage(
      error as AxiosError,
      "OpenRouter"
    );
    return { success: false, errorCode, errorParams, errorType: type };
  }
}

// TranslateOptions is imported from ./types

// Main translate function
export async function translate(
  text: string,
  provider: string,
  apiKey: string,
  refineEnglish: boolean = false,
  options?: TranslateOptions
): Promise<TranslateResult> {
  const userDefaultPrompt = options?.userDefaultPrompt;
  const targetLanguage = options?.targetLanguage || "en";
  
  switch (provider) {
    case "openai":
      return translateWithOpenAI(text, apiKey, targetLanguage, refineEnglish, userDefaultPrompt);
    case "gemini":
      return translateWithGemini(text, apiKey, targetLanguage, refineEnglish, userDefaultPrompt);
    case "openrouter":
      return translateWithOpenRouter(
        text,
        apiKey,
        options?.openrouterModel || "openai/gpt-4o-mini",
        targetLanguage,
        refineEnglish,
        userDefaultPrompt
      );
    default:
      return {
        success: false,
        errorCode: "errors.unknownService",
        errorType: "unknown",
      };
  }
}

// Test API key connection
export async function testApiKey(
  provider: string,
  apiKey: string,
  options?: TranslateOptions
): Promise<{ success: boolean; error?: string; errorCode?: string; errorParams?: Record<string, string> }> {
  try {
    const result = await translate("Hello", provider, apiKey, false, options);
    return { success: result.success, error: result.error, errorCode: result.errorCode, errorParams: result.errorParams };
  } catch (error) {
    return { success: false, errorCode: "errors.connectionTestFailed" };
  }
}

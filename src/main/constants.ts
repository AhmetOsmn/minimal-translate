export const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

export const MODEL_DISPLAY_NAMES: Record<string, string> = {
  openai: "OpenAI",
  gemini: "Google Gemini",
  openrouter: "OpenRouter",
};

export const DEFAULT_CONFIG = {
  selectedModel: "openai",
  encryptedApiKeys: {},
  openrouterModel: "openai/gpt-4o-mini",
  shortcut: "CommandOrControl+Shift+T",
  refineEnglish: false,
  userPrompts: [],
  selectedUserPromptId: null,
  targetLanguage: "en",
  darkMode: true,
  sendNotifications: false,
} as const;

export const TRANSLATE_WINDOW_DIMENSIONS = {
  width: 380,
  height: 200,
  maxHeight: 300,
} as const;

export const SETTINGS_WINDOW_DIMENSIONS = {
  width: 750,
  height: 550,
  minWidth: 600,
  minHeight: 450,
} as const;


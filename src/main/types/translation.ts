export interface ActiveTranslation {
  id: string;
  text: string;
  windowId: number | null;
  startTime: number;
}

export interface TranslateResult {
  success: boolean;
  translation?: string;
  error?: string;
  errorCode?: string;
  errorParams?: Record<string, string>;
  errorType?: "api_key" | "network" | "quota" | "invalid" | "unknown";
}

export interface TranslateOptions {
  openrouterModel?: string;
  userDefaultPrompt?: string;
  targetLanguage?: string;
}


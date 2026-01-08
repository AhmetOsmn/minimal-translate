import type { UserPrompt } from "./user-prompt";

export interface AppConfig {
  selectedModel: string;
  apiKeys: {
    openai: string;
    gemini: string;
    openrouter: string;
  };
  openrouterModel: string;
  shortcut: string;
  openAtLastPosition: boolean;
  enableRefinement: boolean;
  targetLanguage: string;
  userPrompts?: UserPrompt[];
  selectedUserPromptId?: string | null;
  darkMode?: boolean;
  sendNotifications?: boolean;
}


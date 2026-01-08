import type { UserPrompt } from "./user-prompt";
import type { UILanguage } from "./ui-language";

export interface AppConfig {
  selectedModel: string;
  encryptedApiKeys: Record<string, string>;
  openrouterModel: string;
  shortcut: string;
  enableRefinement: boolean;
  userPrompts: UserPrompt[];
  selectedUserPromptId: string | null;
  targetLanguage: string;
  uiLanguage: UILanguage;
  darkMode: boolean;
  sendNotifications: boolean;
}


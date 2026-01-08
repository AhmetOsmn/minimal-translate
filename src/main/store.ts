import Store from "electron-store";
import { getSystemLanguage } from "./utils";
import { DEFAULT_CONFIG } from "./constants";
import type { AppConfig, UILanguage } from "./types";

export const store = new Store<AppConfig>({
  defaults: {
    selectedModel: DEFAULT_CONFIG.selectedModel,
    encryptedApiKeys: DEFAULT_CONFIG.encryptedApiKeys,
    openrouterModel: DEFAULT_CONFIG.openrouterModel,
    shortcut: DEFAULT_CONFIG.shortcut,
    enableRefinement: DEFAULT_CONFIG.enableRefinement,
    userPrompts: [],
    selectedUserPromptId: DEFAULT_CONFIG.selectedUserPromptId,
    targetLanguage: DEFAULT_CONFIG.targetLanguage,
    uiLanguage: getSystemLanguage(),
    darkMode: DEFAULT_CONFIG.darkMode,
    sendNotifications: DEFAULT_CONFIG.sendNotifications,
  },
});


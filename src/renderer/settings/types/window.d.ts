import type { AppConfig } from "../../types/app-config";
import type { OpenRouterModel } from "../../types/openrouter-model";

declare global {
  interface Window {
    settingsAPI: {
      getConfig: () => Promise<AppConfig>;
      saveConfig: (config: Partial<AppConfig>) => Promise<void>;
      testApiKey: (provider: string, apiKey: string) => Promise<{ success: boolean; error?: string; errorCode?: string; errorParams?: Record<string, string> }>;
      registerShortcut: (shortcut: string) => Promise<{ success: boolean; error?: string }>;
      pauseGlobalShortcut: () => Promise<void>;
      resumeGlobalShortcut: () => Promise<void>;
      closeWindow: () => void;
      listOpenRouterModels: () => Promise<{ success: boolean; models: OpenRouterModel[]; error?: string }>;
      getVersion: () => Promise<string>;
      getUiLanguage: () => Promise<'en' | 'tr'>;
      setUiLanguage: (language: 'en' | 'tr') => Promise<void>;
      getSendNotifications: () => Promise<boolean>;
      setSendNotifications: (value: boolean) => Promise<{ success: boolean }>;
      checkNotificationPermission: () => Promise<{ supported: boolean; permission: string }>;
      requestNotificationPermission: () => Promise<{ success: boolean; permission?: string; error?: string }>;
      openNotificationSettings: () => Promise<{ success: boolean; error?: string }>;
    };
  }
}

export {};


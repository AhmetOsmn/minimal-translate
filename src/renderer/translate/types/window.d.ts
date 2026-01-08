import type { AppConfig } from "../../types/app-config";

declare global {
  interface Window {
    electronAPI: {
      translate: (text: string) => Promise<{ success: boolean; translation?: string; error?: string; errorCode?: string; errorParams?: Record<string, string> }>;
      copyToClipboard: (text: string) => Promise<void>;
      closeWindow: () => void;
      onFocusInput: (callback: () => void) => void;
      getSelectedModel: () => Promise<string>;
      setSelectedModel: (modelId: string) => Promise<void>;
      getEnableRefinement: () => Promise<boolean>;
      setEnableRefinement: (value: boolean) => Promise<void>;
      getTargetLanguage: () => Promise<string>;
      getDarkMode: () => Promise<boolean>;
      openSettings: () => void;
    };
  }
}

export {};


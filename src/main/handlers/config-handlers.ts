import { ipcMain } from "electron";
import { store } from "../store";
import { getDecryptedApiKeys, setEncryptedApiKeys } from "../api-keys";
import { getSystemLanguage } from "../utils";
import type { AppConfig, UILanguage } from "../types";

export function registerConfigHandlers(
  onShortcutChanged?: () => void
): void {
  ipcMain.handle("get-config", () => {
    try {
      const storeData = store.store;
      const decryptedApiKeys = getDecryptedApiKeys();
      return {
        ...storeData,
        apiKeys: decryptedApiKeys,
      };
    } catch (error) {
      console.error("Failed to get config:", error);
      return {
        ...store.store,
        apiKeys: {},
      };
    }
  });

  ipcMain.handle("save-config", (_, config: Partial<AppConfig>) => {
    try {
      const configWithApiKeys = config as Partial<AppConfig> & {
        apiKeys?: Record<string, string>;
      };
      if (configWithApiKeys.apiKeys) {
        setEncryptedApiKeys(configWithApiKeys.apiKeys);
        const { apiKeys, ...restConfig } = configWithApiKeys;
        Object.entries(restConfig).forEach(([key, value]) => {
          (store as any).set(key, value);
        });
      } else {
        Object.entries(config).forEach(([key, value]) => {
          (store as any).set(key, value);
        });
      }

      // Re-register shortcut if it changed
      if (config.shortcut && onShortcutChanged) {
        onShortcutChanged();
      }
    } catch (error) {
      console.error("Failed to save config:", error);
      throw new Error("Ayarlar kaydedilemedi");
    }
  });

  ipcMain.handle("get-selected-model", () => {
    try {
      return store.get("selectedModel");
    } catch (error) {
      console.error("Failed to get selected model:", error);
      return "openai";
    }
  });

  ipcMain.handle("set-selected-model", (_, modelId: string) => {
    try {
      store.set("selectedModel", modelId);
    } catch (error) {
      console.error("Failed to set selected model:", error);
    }
  });

  ipcMain.handle("get-refine-english", () => {
    try {
      return store.get("refineEnglish");
    } catch (error) {
      console.error("Failed to get refine English:", error);
      return false;
    }
  });

  ipcMain.handle("set-refine-english", (_, value: boolean) => {
    try {
      store.set("refineEnglish", value);
    } catch (error) {
      console.error("Failed to set refine English:", error);
    }
  });

  ipcMain.handle("get-target-language", () => {
    try {
      return store.get("targetLanguage");
    } catch (error) {
      console.error("Failed to get target language:", error);
      return "en";
    }
  });

  ipcMain.handle("set-target-language", (_, language: string) => {
    try {
      store.set("targetLanguage", language);
    } catch (error) {
      console.error("Failed to set target language:", error);
    }
  });

  ipcMain.handle("get-dark-mode", () => {
    try {
      return (store.get("darkMode") as boolean) ?? true;
    } catch (error) {
      console.error("Failed to get dark mode:", error);
      return true;
    }
  });

  ipcMain.handle("get-ui-language", () => {
    try {
      return (store.get("uiLanguage") as UILanguage) || getSystemLanguage();
    } catch (error) {
      console.error("Failed to get UI language:", error);
      return getSystemLanguage();
    }
  });

  ipcMain.handle("set-ui-language", (_, language: UILanguage) => {
    try {
      store.set("uiLanguage", language);
    } catch (error) {
      console.error("Failed to set UI language:", error);
    }
  });
}


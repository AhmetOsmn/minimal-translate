import { ipcMain, clipboard } from "electron";
import { store } from "../store";
import { getDecryptedApiKeys } from "../api-keys";
import { getTranslateWindow } from "../windows/translate-window";
import {
  createTranslationId,
  addActiveTranslation,
  removeActiveTranslation,
} from "../translation-tracker";
import { showTranslationNotification } from "../notifications";
import { getSystemLanguage } from "../utils";
import { MODEL_DISPLAY_NAMES } from "../constants";
import type { UserPrompt, UILanguage } from "../types";

export function registerTranslationHandlers(): void {
  ipcMain.handle("translate", async (event, text: string) => {
    const selectedModel = store.get("selectedModel") as string;
    const apiKeys = getDecryptedApiKeys();
    const enableRefinement = store.get("enableRefinement") as boolean;
    const openrouterModel = store.get("openrouterModel") as string;
    const targetLanguage = (store.get("targetLanguage") as string) || "en";
    const sendNotifications =
      (store.get("sendNotifications") as boolean) ?? false;

    const apiKey = apiKeys[selectedModel];
    const modelName = MODEL_DISPLAY_NAMES[selectedModel] || selectedModel;

    if (!apiKey) {
      return {
        success: false,
        errorCode: "errors.apiKeyNotDefined",
        errorParams: { modelName },
        errorType: "api_key",
      };
    }

    const translationId = createTranslationId();
    const translateWindow = getTranslateWindow();
    const windowId =
      translateWindow && !translateWindow.isDestroyed()
        ? translateWindow.id
        : null;

    addActiveTranslation(translationId, text, windowId);

    try {
      const { translate } = await import("../translator");

      const userPrompts =
        (store.get("userPrompts") as UserPrompt[]) || [];
      const selectedUserPromptId = store.get("selectedUserPromptId") as
        | string
        | null;

      const selectedPrompt = userPrompts.find(
        (p) => p.id === selectedUserPromptId
      );
      const userDefaultPrompt = selectedPrompt?.content || undefined;

      const result = await translate(text, selectedModel, apiKey, enableRefinement, {
        openrouterModel,
        userDefaultPrompt,
        targetLanguage,
      });

      removeActiveTranslation(translationId);

      if (result.success && result.translation && sendNotifications) {
        clipboard.writeText(result.translation);

        const uiLanguage =
          (store.get("uiLanguage") as UILanguage) || getSystemLanguage();
        showTranslationNotification(result.translation, uiLanguage);
      }

      return result;
    } catch (error) {
      removeActiveTranslation(translationId);
      return { success: false, errorCode: "errors.translationError" };
    }
  });

  ipcMain.handle("test-api-key", async (_, provider: string, apiKey: string) => {
    try {
      const { testApiKey } = await import("../translator");
      const openrouterModel = store.get("openrouterModel") as string;
      return await testApiKey(provider, apiKey, { openrouterModel });
    } catch (error) {
      console.error("Failed to test API key:", error);
      return { success: false, errorCode: "errors.apiKeyTestFailed" };
    }
  });
}


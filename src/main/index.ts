import { app, BrowserWindow } from "electron";
import { getDecryptedApiKeys, migratePlainTextKeys } from "./api-keys";
import { registerConfigHandlers } from "./handlers/config-handlers";
import { registerNotificationHandlers } from "./handlers/notification-handlers";
import { registerOpenRouterHandlers } from "./handlers/openrouter-handlers";
import { registerShortcutHandlers } from "./handlers/shortcut-handlers";
import { registerTranslationHandlers } from "./handlers/translation-handlers";
import { registerWindowHandlers } from "./handlers/window-handlers";
import { registerGlobalShortcut, unregisterAllShortcuts } from "./shortcuts";
import { hasActiveTranslationForWindow } from "./translation-tracker";
import { createTray } from "./tray-manager";
import { createSettingsWindow } from "./windows/settings-window";
import {
  createTranslateWindow,
  getTranslateWindow,
} from "./windows/translate-window";

// Global exception handlers - must be set before app.whenReady()
process.on("uncaughtException", (error: Error) => {
  console.error("Uncaught exception:", error);
});

process.on(
  "unhandledRejection",
  (reason: unknown, promise: Promise<unknown>) => {
    console.error("Unhandled promise rejection:", reason);
  }
);

function handleTranslateWindowToggle(): void {
  const translateWindow = getTranslateWindow();
  if (translateWindow && !translateWindow.isDestroyed()) {
    translateWindow.close();
  } else {
    createTranslateWindow(hasActiveTranslationForWindow);
  }
}

function setupShortcuts(): void {
  registerGlobalShortcut(handleTranslateWindowToggle);
}

function registerAllHandlers(): void {
  registerConfigHandlers(setupShortcuts);
  registerWindowHandlers();
  registerNotificationHandlers();
  registerTranslationHandlers();
  registerOpenRouterHandlers();
  registerShortcutHandlers(setupShortcuts);
}

// App lifecycle
app.whenReady().then(() => {
  // Set App User Model ID for Windows notifications
  if (process.platform === "win32") {
    app.setAppUserModelId("com.llm-prompter.app");
  }

  // Migrate plain text API keys to encrypted storage
  migratePlainTextKeys();

  createTray();
  setupShortcuts();
  registerAllHandlers();

  // Open settings on first run or if no API keys are configured
  const apiKeys = getDecryptedApiKeys();
  const hasAnyKey = Object.values(apiKeys).some((key) => key && key.length > 0);

  if (!hasAnyKey) {
    createSettingsWindow();
  }
});

app.on("window-all-closed", () => {
  // Don't quit when all windows are closed (stay in tray)
});

app.on("will-quit", () => {
  unregisterAllShortcuts();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createSettingsWindow();
  }
});

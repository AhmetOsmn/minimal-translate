import { ipcMain, clipboard, app } from "electron";
import { closeTranslateWindow, getTranslateWindow } from "../windows/translate-window";
import { createSettingsWindow, closeSettingsWindow } from "../windows/settings-window";

export function registerWindowHandlers(): void {
  ipcMain.handle("copy-to-clipboard", (_, text: string) => {
    try {
      clipboard.writeText(text);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  });

  ipcMain.handle("close-translate-window", () => {
    closeTranslateWindow();
  });

  ipcMain.handle("close-settings-window", () => {
    closeSettingsWindow();
  });

  ipcMain.handle("open-settings", () => {
    const translateWindow = getTranslateWindow();
    if (translateWindow && !translateWindow.isDestroyed()) {
      translateWindow.close();
    }
    createSettingsWindow();
  });

  ipcMain.handle("get-app-version", () => {
    return app.getVersion();
  });
}


import { ipcMain } from "electron";
import { unregisterAllShortcuts, registerGlobalShortcut } from "../shortcuts";
import { getTranslateWindow } from "../windows/translate-window";
import { createTranslateWindow } from "../windows/translate-window";
import { hasActiveTranslationForWindow } from "../translation-tracker";

export function registerShortcutHandlers(
  onShortcutRegistered: () => void
): void {
  ipcMain.handle("register-shortcut", (_, shortcut: string) => {
    try {
      unregisterAllShortcuts();

      const translateWindow = getTranslateWindow();
      const toggleHandler = () => {
        if (translateWindow && !translateWindow.isDestroyed()) {
          translateWindow.close();
        } else {
          createTranslateWindow(hasActiveTranslationForWindow);
        }
      };

      const success = registerGlobalShortcut(toggleHandler);

      if (!success) {
        onShortcutRegistered();
        return {
          success: false,
          error: "Bu kısayol başka bir uygulama tarafından kullanılıyor olabilir",
        };
      }

      return { success: true };
    } catch (error) {
      console.error("Failed to register shortcut:", error);
      onShortcutRegistered();
      return {
        success: false,
        error: "Kısayol kaydedilemedi",
      };
    }
  });

  ipcMain.handle("pause-global-shortcut", () => {
    unregisterAllShortcuts();
  });

  ipcMain.handle("resume-global-shortcut", () => {
    onShortcutRegistered();
  });
}

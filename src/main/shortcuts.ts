import { globalShortcut } from "electron";
import { store } from "./store";

export function registerGlobalShortcut(
  onTranslateWindowToggle: () => void
): boolean {
  const shortcut = store.get("shortcut") as string;

  globalShortcut.unregisterAll();

  const success = globalShortcut.register(shortcut, onTranslateWindowToggle);

  if (!success) {
    console.error("Failed to register shortcut:", shortcut);
  }

  return success;
}

export function unregisterAllShortcuts(): void {
  globalShortcut.unregisterAll();
}


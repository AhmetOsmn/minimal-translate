import { app, Menu, nativeImage, Tray } from "electron";
import { createTemplateIcon } from "./tray-icon";
import { getAssetPath } from "./utils";
import { createSettingsWindow } from "./windows/settings-window";

let tray: Tray | null = null;

export function createTray(): void {
  let icon: Electron.NativeImage;
  if (process.platform === "win32") {
    const iconPath = getAssetPath("image.ico");
    icon = nativeImage.createFromPath(iconPath);
    if (icon.isEmpty()) {
      icon = createTemplateIcon();
    }
  } else {
    icon = createTemplateIcon();
  }

  tray = new Tray(icon);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Ayarlar",
      click: () => createSettingsWindow(),
    },
    { type: "separator" },
    {
      label: "Çıkış",
      click: () => {
        app.quit();
      },
    },
  ]);

  tray.setToolTip("LLM Prompter");
  tray.setContextMenu(contextMenu);

  tray.on("click", () => {
    createSettingsWindow();
  });
}


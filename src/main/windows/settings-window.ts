import { app, BrowserWindow } from "electron";
import * as path from "path";
import { getDevServerUrl, getRendererPath } from "../utils";
import { SETTINGS_WINDOW_DIMENSIONS } from "../constants";

const isDev = !app.isPackaged;

let settingsWindow: BrowserWindow | null = null;

export function getSettingsWindow(): BrowserWindow | null {
  return settingsWindow;
}

export function createSettingsWindow(): BrowserWindow {
  if (settingsWindow) {
    settingsWindow.focus();
    return settingsWindow;
  }

  const { width, height, minWidth, minHeight } = SETTINGS_WINDOW_DIMENSIONS;

  settingsWindow = new BrowserWindow({
    width,
    height,
    minWidth,
    minHeight,
    frame: true,
    resizable: true,
    show: false,
    backgroundColor: "#0f172a",
    webPreferences: {
      preload: path.join(__dirname, "../preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (isDev) {
    settingsWindow.loadURL(getDevServerUrl("/settings/index.html"));
  } else {
    settingsWindow.loadFile(getRendererPath("settings/index.html"));
  }

  settingsWindow.once("ready-to-show", () => {
    settingsWindow?.show();
  });

  settingsWindow.on("closed", () => {
    settingsWindow = null;
  });

  return settingsWindow;
}

export function closeSettingsWindow(): void {
  if (settingsWindow && !settingsWindow.isDestroyed()) {
    settingsWindow.close();
  }
}


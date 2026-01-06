import { app, BrowserWindow, screen } from "electron";
import * as path from "path";
import { getDevServerUrl, getRendererPath } from "../utils";
import { TRANSLATE_WINDOW_DIMENSIONS } from "../constants";
import { clearTranslationsForWindow } from "../translation-tracker";

const isDev = !app.isPackaged;

let translateWindow: BrowserWindow | null = null;

export function getTranslateWindow(): BrowserWindow | null {
  return translateWindow;
}

export function createTranslateWindow(
  hasActiveTranslation?: (windowId: number) => boolean
): BrowserWindow {
  const { width: windowWidth, height: windowHeight } =
    TRANSLATE_WINDOW_DIMENSIONS;

  const mousePoint = screen.getCursorScreenPoint();
  const display = screen.getDisplayNearestPoint(mousePoint);

  let x = mousePoint.x - 175;
  let y = mousePoint.y + 20;

  if (x < display.bounds.x) x = display.bounds.x + 10;
  if (x + windowWidth > display.bounds.x + display.bounds.width) {
    x = display.bounds.x + display.bounds.width - windowWidth - 10;
  }
  if (y + windowHeight > display.bounds.y + display.bounds.height) {
    y = mousePoint.y - windowHeight - 10;
  }

  translateWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    x,
    y,
    frame: false,
    transparent: true,
    resizable: true,
    maxHeight: TRANSLATE_WINDOW_DIMENSIONS.maxHeight,
    alwaysOnTop: true,
    skipTaskbar: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "../preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (isDev) {
    translateWindow.loadURL(getDevServerUrl("/translate/index.html"));
  } else {
    translateWindow.loadFile(getRendererPath("translate/index.html"));
  }

  translateWindow.once("ready-to-show", () => {
    translateWindow?.show();
    translateWindow?.focus();
    translateWindow?.webContents.focus();
    setTimeout(() => {
      if (translateWindow && !translateWindow.isDestroyed()) {
        translateWindow.webContents.focus();
        translateWindow.webContents.send("focus-input");
      }
    }, 100);
  });

  translateWindow.on("blur", () => {
    if (translateWindow && !translateWindow.isDestroyed()) {
      if (translateWindow.webContents.isDevToolsOpened()) {
        return;
      }

      const windowId = translateWindow.id;
      if (hasActiveTranslation && hasActiveTranslation(windowId)) {
        return;
      }

      translateWindow.hide();
      setImmediate(() => {
        if (translateWindow && !translateWindow.isDestroyed()) {
          translateWindow.close();
        }
      });
    }
  });

  translateWindow.on("closed", () => {
    const closedWindowId = translateWindow?.id;
    if (closedWindowId !== undefined) {
      clearTranslationsForWindow(closedWindowId);
    }
    translateWindow = null;
  });

  return translateWindow;
}

export function closeTranslateWindow(): void {
  if (translateWindow && !translateWindow.isDestroyed()) {
    translateWindow.close();
  }
}


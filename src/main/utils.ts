import { app } from "electron";
import * as path from "path";
import type { UILanguage } from "./types";

export function getSystemLanguage(): UILanguage {
  const systemLocale = app.getLocale();
  const langCode = systemLocale.split("-")[0].toLowerCase();
  if (langCode === "tr") return "tr";
  return "en";
}

export function getAssetPath(asset: string): string {
  const isDev = !app.isPackaged;
  if (isDev) {
    return path.join(__dirname, "../../assets", asset);
  }
  return path.join(process.resourcesPath, "assets", asset);
}

export function getDevServerUrl(path: string): string {
  return `http://localhost:5173${path}`;
}

export function getRendererPath(filePath: string): string {
  return path.join(__dirname, "../renderer", filePath);
}


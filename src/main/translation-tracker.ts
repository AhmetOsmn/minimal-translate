import type { ActiveTranslation } from "./types";

const activeTranslations = new Map<string, ActiveTranslation>();
let translationIdCounter = 0;

export function createTranslationId(): string {
  return `translation-${++translationIdCounter}-${Date.now()}`;
}

export function addActiveTranslation(
  id: string,
  text: string,
  windowId: number | null
): void {
  activeTranslations.set(id, {
    id,
    text,
    windowId,
    startTime: Date.now(),
  });
}

export function removeActiveTranslation(id: string): void {
  activeTranslations.delete(id);
}

export function hasActiveTranslationForWindow(windowId: number): boolean {
  return Array.from(activeTranslations.values()).some(
    (translation) => translation.windowId === windowId
  );
}

export function clearTranslationsForWindow(windowId: number): void {
  activeTranslations.forEach((translation) => {
    if (translation.windowId === windowId) {
      translation.windowId = null;
    }
  });
}


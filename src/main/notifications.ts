import { Notification } from "electron";
import type { UILanguage } from "./types";

export function showTranslationNotification(
  translation: string,
  uiLanguage: UILanguage
): void {
  if (!Notification.isSupported()) {
    console.warn("Notifications are not supported on this system");
    return;
  }

  const messages = {
    tr: {
      title: "Çeviri Tamamlandı",
      body: "Çeviri panoya kopyalandı!",
    },
    en: {
      title: "Translation Completed",
      body: "Translation copied to clipboard!",
    },
  };

  const message = messages[uiLanguage] || messages.en;

  const notification = new Notification({
    title: message.title,
    body: message.body,
    silent: false,
  });

  notification.show();
}


import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function useSidebarSettings() {
  const { i18n } = useTranslation();
  const [version, setVersion] = useState<string>("");
  const [uiLanguage, setUiLanguage] = useState<"en" | "tr">("tr");
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    window.settingsAPI
      ?.getVersion()
      .then((v) => {
        setVersion(v);
      })
      .catch(() => {
        setVersion("1.0.0");
      });

    window.settingsAPI
      ?.getUiLanguage()
      .then((lang) => {
        if (lang === "en" || lang === "tr") {
          setUiLanguage(lang);
        }
      })
      .catch(() => {
        const currentLang = i18n.language;
        if (currentLang === "en" || currentLang === "tr") {
          setUiLanguage(currentLang);
        }
      });

    window.settingsAPI?.getConfig().then((config) => {
      const isDarkMode = config?.darkMode ?? true;
      setDarkMode(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });
  }, []);

  // Sync uiLanguage with i18n.language when it changes
  useEffect(() => {
    const currentLang = i18n.language;
    if (
      (currentLang === "en" || currentLang === "tr") &&
      currentLang !== uiLanguage
    ) {
      setUiLanguage(currentLang);
    }
  }, [i18n.language, uiLanguage]);

  const handleLanguageChange = async (lang: "en" | "tr") => {
    if (lang === uiLanguage) return;
    setUiLanguage(lang);
    await i18n.changeLanguage(lang);
    await window.settingsAPI?.setUiLanguage(lang);
  };

  const handleDarkModeToggle = async () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    await window.settingsAPI?.saveConfig({ darkMode: newDarkMode });
  };

  return {
    version,
    uiLanguage,
    darkMode,
    handleLanguageChange,
    handleDarkModeToggle,
  };
}


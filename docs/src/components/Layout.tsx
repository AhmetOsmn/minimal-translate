import { ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../i18n/i18n";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [currentLang, setCurrentLang] = useState<"en" | "tr">(
    i18n.language as "en" | "tr"
  );

  useEffect(() => {
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }

    // Update language from i18n
    setCurrentLang(i18n.language as "en" | "tr");

    // Listen for language changes
    const handleLanguageChange = (lng: string) => {
      setCurrentLang(lng as "en" | "tr");
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleLanguage = async () => {
    const newLang = currentLang === "en" ? "tr" : "en";
    await changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <div className="min-h-screen bg-theme-bg-primary">
      <div className="flex">
        <Navigation />
        <main className="flex-1">
          <div className="max-w-4xl mx-auto px-8 py-12">
            <div className="flex justify-end gap-2 mb-4">
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 rounded-lg hover:bg-theme-bg-hover transition-colors text-sm font-medium text-theme-text-secondary hover:text-theme-text-primary flex items-center gap-2"
                aria-label="Toggle language"
              >
                <span>{currentLang === "en" ? "🇺🇸 EN" : "🇹🇷 TR"}</span>
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-theme-bg-hover transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg
                    className="w-5 h-5 text-theme-text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-theme-text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

import { useTranslation } from "react-i18next";

interface SidebarDarkModeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

export function SidebarDarkModeToggle({
  darkMode,
  onToggle,
}: SidebarDarkModeToggleProps) {
  const { t } = useTranslation();

  return (
    <div className="px-3 py-3 border-t border-theme-border-primary">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors text-theme-text-secondary hover:bg-theme-bg-hover"
      >
        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {darkMode ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            )}
          </svg>
          <span className="font-medium">{t("sidebar.darkMode")}</span>
        </div>
        <div
          className={`relative w-10 h-5 rounded-full transition-colors ${
            darkMode ? "bg-accent-500" : "bg-theme-bg-hover"
          }`}
        >
          <div
            className={`absolute top-1/2 w-4 h-4 bg-white rounded-full transition-all duration-200 shadow-sm -translate-y-1/2 ${
              darkMode ? "left-[22px]" : "left-0.5"
            }`}
          />
        </div>
      </button>
    </div>
  );
}


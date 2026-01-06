interface SidebarLanguageToggleProps {
  currentLanguage: "en" | "tr";
  onLanguageChange: (lang: "en" | "tr") => void;
}

export function SidebarLanguageToggle({
  currentLanguage,
  onLanguageChange,
}: SidebarLanguageToggleProps) {
  return (
    <div className="px-3 py-3 border-t border-theme-border-primary">
      <div className="relative bg-theme-bg-tertiary/50 rounded-lg p-1 flex justify-between gap-2">
        <button
          onClick={() => onLanguageChange("en")}
          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md text-xs font-semibold transition-all duration-200 min-h-[36px] ${
            currentLanguage === "en"
              ? "bg-accent-500 text-white shadow-md shadow-accent-500/30"
              : "text-theme-text-secondary hover:text-theme-text-primary hover:bg-theme-bg-hover/50"
          }`}
        >
          <span className="text-base leading-none">🇬🇧</span>
          <span className="leading-none">EN</span>
        </button>
        <button
          onClick={() => onLanguageChange("tr")}
          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md text-xs font-semibold transition-all duration-200 min-h-[36px] ${
            currentLanguage === "tr"
              ? "bg-accent-500 text-white shadow-md shadow-accent-500/30"
              : "text-theme-text-secondary hover:text-theme-text-primary hover:bg-theme-bg-hover/50"
          }`}
        >
          <span className="text-base leading-none">🇹🇷</span>
          <span className="leading-none">TR</span>
        </button>
      </div>
    </div>
  );
}


import type { Page } from "../../types/page";
import { SidebarNavigation } from "./SidebarNavigation";
import { SidebarDarkModeToggle } from "./SidebarDarkModeToggle";
import { SidebarLanguageToggle } from "./SidebarLanguageToggle";
import { SidebarVersion } from "./SidebarVersion";
import { useSidebarSettings } from "../hooks/useSidebarSettings";

interface SidebarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const {
    version,
    uiLanguage,
    darkMode,
    handleLanguageChange,
    handleDarkModeToggle,
  } = useSidebarSettings();

  return (
    <aside className="w-56 bg-theme-bg-secondary border-r border-theme-border-primary flex flex-col">
      <SidebarNavigation currentPage={currentPage} onPageChange={onPageChange} />
      <SidebarDarkModeToggle darkMode={darkMode} onToggle={handleDarkModeToggle} />
      <SidebarLanguageToggle
        currentLanguage={uiLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <SidebarVersion version={version} />
    </aside>
  );
}

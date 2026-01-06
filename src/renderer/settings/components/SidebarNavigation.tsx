import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { Page } from "../../types/page";
import { getMenuItems } from "../constants/sidebarMenuItems";

interface SidebarNavigationProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export function SidebarNavigation({
  currentPage,
  onPageChange,
}: SidebarNavigationProps) {
  const { t } = useTranslation();
  const menuItems = useMemo(() => getMenuItems(t), [t]);

  return (
    <nav className="flex-1 p-3 pt-4">
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                currentPage === item.id
                  ? "bg-accent-500/10 text-accent-400"
                  : "text-theme-text-secondary hover:bg-theme-bg-hover hover:text-theme-text-primary"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

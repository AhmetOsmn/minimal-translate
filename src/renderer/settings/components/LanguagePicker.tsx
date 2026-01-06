import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import type { Language } from "../../../main/types/language";

interface LanguagePickerProps {
  languages: Language[];
  selectedLanguageCode: string;
  onLanguageChange: (code: string) => void;
}

export function LanguagePicker({
  languages,
  selectedLanguageCode,
  onLanguageChange,
}: LanguagePickerProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const pickerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const selectedLanguage =
    languages.find((lang) => lang.code === selectedLanguageCode) ||
    languages[0];

  // Calculate dropdown position when opening
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const updatePosition = () => {
        if (buttonRef.current) {
          const rect = buttonRef.current.getBoundingClientRect();
          setDropdownPosition({
            top: rect.bottom + 8,
            left: rect.left,
            width: Math.max(rect.width, 280),
          });
        }
      };

      updatePosition();
      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);

      return () => {
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }
  }, [isOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSearch("");
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Normalize Turkish characters for case-insensitive search
  const normalizeForSearch = (text: string): string => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ı/g, "i")
      .replace(/İ/g, "i")
      .replace(/ğ/g, "g")
      .replace(/Ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/Ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/Ş/g, "s")
      .replace(/ö/g, "o")
      .replace(/Ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/Ç/g, "c");
  };

  const filteredLanguages = languages.filter((lang) => {
    const searchTerm = normalizeForSearch(search);
    return (
      normalizeForSearch(lang.name).includes(searchTerm) ||
      normalizeForSearch(lang.code).includes(searchTerm)
    );
  });

  const handleSelect = (code: string) => {
    onLanguageChange(code);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full max-w-xs px-4 py-2.5 bg-theme-button-secondary-bg hover:bg-theme-button-secondary-hover rounded-lg text-left flex items-center justify-between transition-colors"
      >
        <span className="text-theme-text-primary font-medium">
          {selectedLanguage.name}
        </span>
        <svg
          className="w-4 h-4 text-theme-text-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen &&
        createPortal(
          <div
            ref={pickerRef}
            className="fixed bg-theme-bg-primary border border-theme-border-primary rounded-lg shadow-2xl z-[99999] animate-fade-in"
            style={{
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
              width: `${dropdownPosition.width}px`,
              maxWidth: "320px",
            }}
          >
            <div className="p-2 border-b border-theme-border-primary">
              <input
                type="text"
                placeholder={t(
                  "settings.translation.targetLanguage.searchPlaceholder"
                )}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 py-2 bg-theme-input-bg text-theme-text-primary rounded-lg text-sm placeholder-theme-text-placeholder focus:outline-none focus:ring-2 focus:ring-accent-500"
                autoFocus
              />
            </div>
            <div className="max-h-64 overflow-y-auto">
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full px-4 py-2.5 text-left text-sm transition-colors flex items-center justify-between ${
                      selectedLanguageCode === lang.code
                        ? "bg-accent-500/20 text-accent-400"
                        : "text-theme-text-tertiary hover:bg-theme-bg-hover"
                    }`}
                  >
                    <span>{lang.name}</span>
                    {selectedLanguageCode === lang.code && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-sm text-theme-text-muted text-center">
                  {t("settings.translation.targetLanguage.notFound")}
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

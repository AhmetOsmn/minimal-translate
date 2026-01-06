import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { Language } from "../../../main/types/language";

const languageCodes = [
  "en",
  "tr",
  "de",
  "fr",
  "es",
  "it",
  "pt",
  "ru",
  "ja",
  "zh",
  "ko",
  "ar",
  "nl",
  "pl",
  "sv",
  "da",
  "no",
  "fi",
  "cs",
  "hu",
  "ro",
  "el",
  "he",
  "hi",
  "th",
  "vi",
  "id",
  "uk",
  "bg",
  "hr",
];

export function useLanguages(): Language[] {
  const { t, i18n } = useTranslation();

  return useMemo(
    () =>
      languageCodes
        .map((code) => ({
          code,
          name: t(`languages.${code}`) || code,
        }))
        .sort((a, b) =>
          a.name.localeCompare(b.name, i18n.language === "tr" ? "tr" : "en")
        ),
    [t, i18n.language]
  );
}


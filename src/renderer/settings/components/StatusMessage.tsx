import { useTranslation } from "react-i18next";

interface StatusMessageProps {
  type: "saving" | "success" | "error";
  message?: string;
}

export function StatusMessage({ type, message }: StatusMessageProps) {
  const { t } = useTranslation();

  if (type === "saving") {
    return (
      <div className="mt-6 text-sm text-accent-400 text-center animate-fade-in">
        {t("common.saving")}
      </div>
    );
  }

  if (type === "success" && message) {
    return (
      <div className="mt-6 text-sm text-green-400 text-center animate-fade-in flex items-center justify-center gap-2">
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
        {message}
      </div>
    );
  }

  if (type === "error" && message) {
    return (
      <div className="mt-6 text-sm text-red-400 text-center animate-fade-in flex items-center justify-center gap-2">
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
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {message}
      </div>
    );
  }

  return null;
}


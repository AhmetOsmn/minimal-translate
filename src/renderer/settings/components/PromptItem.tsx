import { useTranslation } from "react-i18next";
import type { UserPrompt } from "../../types/user-prompt";

interface PromptItemProps {
  prompt: UserPrompt;
  isSelected: boolean;
  previewLength: number;
  index: number;
  onEdit: (prompt: UserPrompt) => void;
  onDelete: (prompt: UserPrompt) => void;
}

export function PromptItem({
  prompt,
  isSelected,
  previewLength,
  index,
  onEdit,
  onDelete,
}: PromptItemProps) {
  const { t } = useTranslation();

  return (
    <div
      className="p-4 bg-theme-bg-tertiary/30 rounded-lg border border-theme-border-secondary/50 animate-slide-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-theme-text-primary font-medium">{prompt.name}</h4>
            {isSelected && (
              <span className="px-2 py-0.5 text-xs bg-accent-500/20 text-accent-400 rounded">
                {t("common.selected")}
              </span>
            )}
          </div>
          <p className="text-sm text-theme-text-secondary">
            {prompt.content.length > previewLength
              ? `${prompt.content.substring(0, previewLength)}...`
              : prompt.content}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(prompt)}
            className="p-2 text-theme-text-secondary hover:text-theme-text-primary hover:bg-theme-bg-hover rounded-lg transition-colors"
            title={t("common.edit")}
          >
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
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            onClick={() => onDelete(prompt)}
            className="p-2 text-theme-text-secondary hover:text-red-400 hover:bg-theme-bg-hover rounded-lg transition-colors"
            title={t("common.delete")}
          >
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}


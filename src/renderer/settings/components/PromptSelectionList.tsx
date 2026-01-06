import { useTranslation } from "react-i18next";
import type { UserPrompt } from "../../types/user-prompt";

interface PromptSelectionListProps {
  prompts: UserPrompt[];
  selectedId: string | null;
  previewLength: number;
  onSelect: (id: string | null) => void;
}

export function PromptSelectionList({
  prompts,
  selectedId,
  previewLength,
  onSelect,
}: PromptSelectionListProps) {
  const { t } = useTranslation();

  return (
    <div className="card p-5 mb-6">
      <h3 className="text-theme-text-primary font-medium mb-4">
        {t("settings.prompts.selected")}
      </h3>
      <div className="space-y-2">
        <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-theme-bg-hover/50 cursor-pointer transition-colors">
          <input
            type="radio"
            name="prompt-selection"
            checked={selectedId === null}
            onChange={() => onSelect(null)}
            className="w-4 h-4 text-accent-500 border-theme-border-secondary focus:ring-accent-500 focus:ring-2"
          />
          <span className="text-theme-text-tertiary">{t("common.none")}</span>
        </label>
        {prompts.map((prompt) => (
          <label
            key={prompt.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-theme-bg-hover/50 cursor-pointer transition-colors"
          >
            <input
              type="radio"
              name="prompt-selection"
              checked={selectedId === prompt.id}
              onChange={() => onSelect(prompt.id)}
              className="w-4 h-4 text-accent-500 border-theme-border-secondary focus:ring-accent-500 focus:ring-2"
            />
            <div className="flex-1">
              <span className="text-theme-text-primary font-medium">
                {prompt.name}
              </span>
              <p className="text-xs text-theme-text-secondary mt-1">
                {prompt.content.length > previewLength
                  ? `${prompt.content.substring(0, previewLength)}...`
                  : prompt.content}
              </p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}


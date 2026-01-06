import { useTranslation } from "react-i18next";
import type { UserPrompt } from "../../types/user-prompt";

interface PromptFormModalProps {
  isOpen: boolean;
  editingPrompt: UserPrompt | null;
  formName: string;
  formContent: string;
  saving: boolean;
  error: string | null;
  onNameChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onSave: () => void;
  onClose: () => void;
}

export function PromptFormModal({
  isOpen,
  editingPrompt,
  formName,
  formContent,
  saving,
  error,
  onNameChange,
  onContentChange,
  onSave,
  onClose,
}: PromptFormModalProps) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="card p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-theme-text-primary">
            {editingPrompt
              ? t("settings.prompts.edit")
              : t("settings.prompts.add")}
          </h3>
          <button
            onClick={onClose}
            className="p-1 text-theme-text-secondary hover:text-theme-text-primary rounded-lg hover:bg-theme-bg-hover transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-theme-text-tertiary mb-2">
              {t("settings.prompts.name")}
            </label>
            <input
              type="text"
              value={formName}
              onChange={(e) => onNameChange(e.target.value)}
              placeholder={t("settings.prompts.namePlaceholder")}
              className="input-field"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-theme-text-tertiary mb-2">
              {t("settings.prompts.content")}
            </label>
            <textarea
              value={formContent}
              onChange={(e) => onContentChange(e.target.value)}
              placeholder={t("settings.prompts.contentPlaceholder")}
              rows={6}
              className="input-field resize-none"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-center gap-2 animate-fade-in">
              <svg
                className="w-4 h-4 flex-shrink-0"
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
              {error}
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="btn-secondary"
              disabled={saving}
            >
              {t("common.cancel")}
            </button>
            <button
              onClick={onSave}
              disabled={!formName.trim() || !formContent.trim() || saving}
              className="btn-primary flex items-center gap-2"
            >
              {saving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t("common.saving")}
                </>
              ) : (
                <>
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
                  {t("common.save")}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


import { useTranslation } from "react-i18next";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  itemName: string;
  error: string | null;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteConfirmModal({
  isOpen,
  itemName,
  error,
  onConfirm,
  onCancel,
}: DeleteConfirmModalProps) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="card p-6 max-w-md w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-theme-text-primary">
            {t("settings.prompts.deleteConfirm")}
          </h3>
          <button
            onClick={onCancel}
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

        <p className="text-theme-text-tertiary mb-6">
          {t("settings.prompts.deleteConfirmMessage", { name: itemName })}
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-center gap-2 animate-fade-in">
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

        <div className="flex items-center justify-end gap-3">
          <button onClick={onCancel} className="btn-secondary">
            {t("common.cancel")}
          </button>
          <button
            onClick={onConfirm}
            className="btn-primary bg-red-500 hover:bg-red-600 text-white"
          >
            {t("common.delete")}
          </button>
        </div>
      </div>
    </div>
  );
}


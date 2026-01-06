import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { OpenRouterModel } from "../../types/openrouter-model";

interface OpenRouterPickerProps {
  selectedModelId: string;
  models: OpenRouterModel[];
  loading: boolean;
  error: string | null;
  onModelChange: (modelId: string) => void;
  onRetry: () => void;
}

export function OpenRouterPicker({
  selectedModelId,
  models,
  loading,
  error,
  onModelChange,
  onRetry,
}: OpenRouterPickerProps) {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const selectedModelRef = useRef<HTMLButtonElement>(null);

  const selectedModel = models.find((m) => m.id === selectedModelId);

  const filteredModels = useMemo(() => {
    let filtered = models;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (m) =>
          m.name.toLowerCase().includes(query) ||
          m.id.toLowerCase().includes(query)
      );
    }

    if (showFreeOnly) {
      filtered = filtered.filter((m) => m.isFree);
    }

    return filtered;
  }, [models, searchQuery, showFreeOnly]);

  // Scroll to selected model when models are loaded
  useEffect(() => {
    if (models.length > 0) {
      setTimeout(() => {
        selectedModelRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 150);
    }
  }, [models.length]);

  return (
    <div className="mt-6 card p-5 animate-fade-in">
      <h3 className="text-theme-text-primary font-medium mb-4 flex items-center gap-2">
        <span className="text-xl">🎯</span>
        {t("settings.models.openrouterPicker.title")}
      </h3>

      {/* Currently selected model */}
      {selectedModel && (
        <div className="mb-4 p-3 bg-accent-500/10 border border-accent-500/30 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-accent-400 text-sm font-medium">
              {t("settings.models.openrouterPicker.selected")}
            </span>
            <span className="text-theme-text-primary text-sm">
              {selectedModel.name}
            </span>
            {selectedModel.isFree && (
              <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                {t("settings.models.openrouterPicker.free")}
              </span>
            )}
          </div>
          <p className="text-xs text-theme-text-secondary mt-1 font-mono">
            {selectedModel.id}
          </p>
        </div>
      )}

      {/* Search and filter */}
      <div className="flex gap-3 mb-4">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-theme-text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t(
              "settings.models.openrouterPicker.searchPlaceholder"
            )}
            className="input-field pl-10 text-sm"
          />
        </div>
        <button
          onClick={() => setShowFreeOnly(!showFreeOnly)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
            showFreeOnly
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-theme-bg-tertiary text-theme-text-secondary border border-theme-border-secondary hover:text-theme-text-primary"
          }`}
        >
          <span>🆓</span>
          {t("settings.models.openrouterPicker.freeFilter")}
        </button>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="flex items-center justify-center py-8 gap-3">
          <div className="w-5 h-5 border-2 border-accent-500/30 border-t-accent-500 rounded-full animate-spin" />
          <span className="text-theme-text-secondary text-sm">
            {t("settings.models.openrouterPicker.loading")}
          </span>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
          <div className="flex items-center gap-2 mb-2">
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
            {error}
          </div>
          <button
            onClick={onRetry}
            className="text-xs text-red-300 hover:text-white underline"
          >
            {t("settings.models.openrouterPicker.retry")}
          </button>
        </div>
      )}

      {/* Model list */}
      {!loading && !error && (
        <div className="max-h-64 overflow-y-auto space-y-1 custom-scrollbar">
          {filteredModels.length === 0 ? (
            <div className="py-4 text-center text-theme-text-secondary text-sm">
              {searchQuery || showFreeOnly
                ? t("settings.models.openrouterPicker.noResults")
                : t("settings.models.openrouterPicker.noModels")}
            </div>
          ) : (
            filteredModels.map((model) => (
              <button
                key={model.id}
                ref={selectedModelId === model.id ? selectedModelRef : null}
                onClick={() => onModelChange(model.id)}
                className={`w-full p-3 rounded-lg text-left transition-all flex items-center gap-3 ${
                  selectedModelId === model.id
                    ? "bg-accent-500/10 border border-accent-500/30"
                    : "bg-theme-bg-tertiary/50 border border-transparent hover:bg-theme-bg-tertiary hover:border-theme-border-primary"
                }`}
              >
                {/* Radio indicator */}
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selectedModelId === model.id
                      ? "border-accent-500 bg-accent-500"
                      : "border-theme-border-secondary"
                  }`}
                >
                  {selectedModelId === model.id && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </div>

                {/* Model info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-theme-text-primary text-sm font-medium truncate">
                      {model.name}
                    </span>
                    {model.isFree && (
                      <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 text-[10px] rounded font-medium flex-shrink-0">
                        {t("settings.models.openrouterPicker.free")}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-theme-text-muted truncate font-mono">
                    {model.id}
                  </p>
                </div>
              </button>
            ))
          )}
        </div>
      )}

      {/* Manual model ID input */}
      <div className="mt-4 pt-4 border-t border-theme-border-secondary/50">
        <label className="block text-sm text-theme-text-secondary mb-2">
          {t("settings.models.openrouterPicker.customId")}
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={selectedModelId}
            onChange={(e) => onModelChange(e.target.value)}
            placeholder={t("settings.models.openrouterPicker.customPlaceholder")}
            className="input-field flex-1 text-sm font-mono"
          />
          <button
            onClick={() => onModelChange(selectedModelId)}
            className="btn-secondary px-4 text-sm"
          >
            {t("settings.models.openrouterPicker.save")}
          </button>
        </div>
      </div>

      {/* Help link */}
      <div className="mt-4 text-xs text-theme-text-muted">
        <a
          href="https://openrouter.ai/models"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-400 hover:text-accent-300 inline-flex items-center gap-1"
        >
          {t("settings.models.openrouterPicker.viewAll")}
          <svg
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

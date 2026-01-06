import { useCallback, useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import type { Model } from "../../types/model";
import { ModelCard } from "../components/ModelCard";
import { OpenRouterPicker } from "../components/OpenRouterPicker";
import { StatusMessage } from "../components/StatusMessage";
import { useOpenRouterModels } from "../hooks/useOpenRouterModels";

const getModels = (t: (key: string) => string): Model[] => [
  {
    id: "openai",
    name: t("settings.models.openai.name"),
    description: t("settings.models.openai.description"),
    icon: "🤖",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "gemini",
    name: t("settings.models.gemini.name"),
    description: t("settings.models.gemini.description"),
    icon: "✨",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "openrouter",
    name: t("settings.models.openrouter.name"),
    description: t("settings.models.openrouter.description"),
    icon: "🌐",
    color: "from-orange-500 to-red-500",
  },
];

export default function AIModels() {
  const { t } = useTranslation();
  const [selectedModel, setSelectedModel] = useState("openai");
  const [saving, setSaving] = useState(false);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [openrouterModel, setOpenrouterModel] = useState(
    "openai/gpt-4o-mini"
  );

  const { models: openrouterModels, loading: loadingModels, error: modelsError, fetchModels } = useOpenRouterModels();

  useEffect(() => {
    window.settingsAPI?.getConfig().then((config) => {
      if (config?.selectedModel) {
        setSelectedModel(config.selectedModel);
        if (config.selectedModel === "openrouter") {
          fetchModels();
        }
      }
      if (config?.openrouterModel) {
        setOpenrouterModel(config.openrouterModel);
      }
    });
  }, [fetchModels]);

  const handleModelChange = useCallback(async (modelId: string) => {
    setSelectedModel(modelId);
    setSaving(true);
    setSaveError(null);

    try {
      await window.settingsAPI?.saveConfig({ selectedModel: modelId });

      if (modelId === "openrouter" && openrouterModels.length === 0) {
        await fetchModels();
      }
    } catch (error) {
      console.error("Failed to save model:", error);
      setSaveError(t("errors.saveFailed"));
      const config = await window.settingsAPI?.getConfig();
      if (config?.selectedModel) {
        setSelectedModel(config.selectedModel);
      }
    } finally {
      setSaving(false);
    }
  }, [t, openrouterModels.length, fetchModels]);

  const handleOpenRouterModelChange = useCallback(async (modelId: string) => {
    setOpenrouterModel(modelId);
    setSaving(true);
    setSavedMessage(null);
    setSaveError(null);
    try {
      await window.settingsAPI?.saveConfig({ openrouterModel: modelId });
      setSavedMessage(t("settings.models.saved"));
      setTimeout(() => setSavedMessage(null), 2000);
    } catch (error) {
      console.error("Failed to save OpenRouter model:", error);
      setSaveError(t("errors.saveFailed"));
      const config = await window.settingsAPI?.getConfig();
      if (config?.openrouterModel) {
        setOpenrouterModel(config.openrouterModel);
      }
    } finally {
      setSaving(false);
    }
  }, [t]);

  const models = getModels(t);

  return (
    <div className="max-w-2xl animate-fade-in">
      <h2 className="text-2xl font-bold text-theme-text-primary mb-2">
        {t("settings.models.title")}
      </h2>
      <p className="text-theme-text-secondary mb-8">
        {t("settings.models.subtitle")}
      </p>

      <div className="space-y-3">
        {models.map((model, index) => (
          <ModelCard
            key={model.id}
            model={model}
            isSelected={selectedModel === model.id}
            index={index}
            onSelect={handleModelChange}
          />
        ))}
      </div>

      {/* OpenRouter Model Picker */}
      {selectedModel === "openrouter" && (
        <OpenRouterPicker
          selectedModelId={openrouterModel}
          models={openrouterModels}
          loading={loadingModels}
          error={modelsError}
          onModelChange={handleOpenRouterModelChange}
          onRetry={fetchModels}
        />
      )}

      {/* Status messages */}
      {saving && <StatusMessage type="saving" />}
      {savedMessage && !saving && (
        <StatusMessage type="success" message={savedMessage} />
      )}
      {saveError && !saving && (
        <StatusMessage type="error" message={saveError} />
      )}

      {/* Note */}
      <div className="mt-6 p-4 bg-theme-bg-tertiary/50 rounded-lg border border-theme-border-secondary/50">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-theme-text-secondary mt-0.5 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          <p className="text-sm text-theme-text-secondary">
            <Trans
              i18nKey="settings.models.openrouterPicker.note"
              components={{
                strong: (
                  <strong className="text-theme-text-primary font-medium" />
                ),
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

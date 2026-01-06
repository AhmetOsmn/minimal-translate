import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import type { OpenRouterModel } from "../../types/openrouter-model";

export function useOpenRouterModels() {
  const { t } = useTranslation();
  const [models, setModels] = useState<OpenRouterModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchModels = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await window.settingsAPI?.listOpenRouterModels();
      if (result?.success) {
        setModels(result.models);
      } else {
        setError(
          result?.error || t("settings.models.openrouterPicker.error")
        );
      }
    } catch (error) {
      setError(t("settings.models.openrouterPicker.error"));
    } finally {
      setLoading(false);
    }
  }, [t]);

  return { models, loading, error, fetchModels };
}


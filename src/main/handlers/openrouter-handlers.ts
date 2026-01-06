import { ipcMain } from "electron";
import axios from "axios";
import { CACHE_TTL } from "../constants";
import type { OpenRouterModel, OpenRouterModelsCache } from "../types";

let openrouterModelsCache: OpenRouterModelsCache | null = null;

export function registerOpenRouterHandlers(): void {
  ipcMain.handle("openrouter-list-models", async () => {
    try {
      const now = Date.now();
      if (
        openrouterModelsCache &&
        now - openrouterModelsCache.fetchedAt < CACHE_TTL
      ) {
        return { success: true, models: openrouterModelsCache.models };
      }

      const response = await axios.get("https://openrouter.ai/api/v1/models", {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 30000,
      });

      const rawModels = response.data.data || [];

      const models: OpenRouterModel[] = rawModels.map(
        (model: {
          id: string;
          name?: string;
          description?: string;
          pricing?: { prompt: string; completion: string };
        }) => {
          const isFree =
            model.id.endsWith(":free") ||
            (model.pricing &&
              parseFloat(model.pricing.prompt) === 0 &&
              parseFloat(model.pricing.completion) === 0);

          return {
            id: model.id,
            name: model.name || model.id,
            description: model.description || "",
            pricing: model.pricing,
            isFree: !!isFree,
          };
        }
      );

      models.sort((a, b) => {
        if (a.isFree !== b.isFree) {
          return a.isFree ? -1 : 1;
        }
        return a.name.localeCompare(b.name);
      });

      openrouterModelsCache = {
        models,
        fetchedAt: now,
      };

      return { success: true, models };
    } catch (error) {
      console.error("Failed to fetch OpenRouter models:", error);
      return {
        success: false,
        error: "Model listesi alınamadı",
        models: [],
      };
    }
  });
}


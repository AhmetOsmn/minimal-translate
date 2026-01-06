import { useTranslation } from "react-i18next";
import type { Model } from "../../types/model";

interface ModelCardProps {
  model: Model;
  isSelected: boolean;
  index: number;
  onSelect: (modelId: string) => void;
}

export function ModelCard({
  model,
  isSelected,
  index,
  onSelect,
}: ModelCardProps) {
  const { t } = useTranslation();

  return (
    <button
      onClick={() => onSelect(model.id)}
      className={`w-full card p-4 flex items-start gap-4 text-left transition-all animate-slide-up ${
        isSelected
          ? "ring-2 ring-accent-500 bg-accent-500/5"
          : "hover:bg-theme-bg-hover/50"
      }`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 bg-gradient-to-br ${model.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}
      >
        {model.icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-theme-text-primary font-medium">{model.name}</h3>
          {isSelected && (
            <span className="px-2 py-0.5 bg-accent-500/20 text-accent-400 text-xs rounded-full">
              {t("common.active")}
            </span>
          )}
        </div>
        <p className="text-sm text-theme-text-secondary">{model.description}</p>
      </div>

      {/* Radio */}
      <div className="flex-shrink-0 mt-1">
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
            isSelected
              ? "border-accent-500 bg-accent-500"
              : "border-theme-border-secondary"
          }`}
        >
          {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
        </div>
      </div>
    </button>
  );
}


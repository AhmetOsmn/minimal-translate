import { ReactNode } from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  statusLabel?: ReactNode;
}

export function ToggleSwitch({
  checked,
  onChange,
  disabled = false,
  statusLabel,
}: ToggleSwitchProps) {
  return (
    <>
      <button
        onClick={onChange}
        disabled={disabled}
        className={`relative w-12 h-6 rounded-full transition-colors flex-shrink-0 mt-1 ${
          checked ? "bg-accent-500" : "bg-theme-border-secondary"
        } ${disabled ? "opacity-50" : ""}`}
      >
        <div
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
            checked ? "left-7" : "left-1"
          }`}
        />
      </button>
      {statusLabel && (
        <div className="mt-4 ml-12 flex items-center gap-2 text-xs">
          {statusLabel}
        </div>
      )}
    </>
  );
}


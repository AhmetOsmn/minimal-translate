import { ReactNode } from "react";

interface SettingCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
  error?: string | null;
}

export function SettingCard({
  icon,
  title,
  description,
  children,
  error,
}: SettingCardProps) {
  return (
    <div className="card p-5 mb-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">{icon}</div>
          <h3 className="text-theme-text-primary font-medium ml-12 mb-2">
            {title}
          </h3>
          <p className="text-sm text-theme-text-secondary ml-12 mb-3">
            {description}
          </p>
          <div className="ml-12">{children}</div>
        </div>
      </div>

      {error && (
        <div className="mt-4 ml-12 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-center gap-2 animate-fade-in">
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
    </div>
  );
}


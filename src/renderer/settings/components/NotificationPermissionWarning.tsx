import { useTranslation } from "react-i18next";

interface NotificationPermissionWarningProps {
  isCheckingPermission: boolean;
  isPermissionDenied: boolean;
  onOpenSettings: () => void;
}

export function NotificationPermissionWarning({
  isCheckingPermission,
  isPermissionDenied,
  onOpenSettings,
}: NotificationPermissionWarningProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-4 ml-12 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg animate-fade-in">
      <div className="flex items-start gap-3">
        <svg
          className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <div className="flex-1">
          <h4 className="text-yellow-400 font-medium mb-1">
            {t("settings.notifications.permissionWarning.title")}
          </h4>
          <p className="text-yellow-300/80 text-sm mb-3">
            {t("settings.notifications.permissionWarning.description")}
          </p>
          {isCheckingPermission ? (
            <p className="text-yellow-300/60 text-xs">
              {t("settings.notifications.checkingPermission")}...
            </p>
          ) : isPermissionDenied ? (
            <div className="space-y-3">
              <p className="text-yellow-300/80 text-sm font-medium">
                {t("settings.notifications.permissionDenied.title")}
              </p>
              <div className="text-yellow-300/60 text-xs space-y-1">
                <p>{t("settings.notifications.permissionDenied.step1")}</p>
                <p>{t("settings.notifications.permissionDenied.step2")}</p>
                <p>{t("settings.notifications.permissionDenied.step3")}</p>
              </div>
              <button
                onClick={onOpenSettings}
                className="mt-2 px-4 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/40 rounded-lg text-yellow-300 text-sm font-medium transition-colors flex items-center gap-2"
              >
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {t("settings.notifications.openSettings")}
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-yellow-300/60 text-xs">
                {t("settings.notifications.permissionDefault.message")}
              </p>
              <button
                onClick={onOpenSettings}
                className="mt-2 px-4 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/40 rounded-lg text-yellow-300 text-sm font-medium transition-colors flex items-center gap-2"
              >
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {t("settings.notifications.openSettings")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


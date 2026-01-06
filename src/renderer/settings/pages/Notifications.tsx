import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NotificationPermissionWarning } from "../components/NotificationPermissionWarning";
import { SettingCard } from "../components/SettingCard";
import { ToggleSwitch } from "../components/ToggleSwitch";
import { useNotificationPermission } from "../hooks/useNotificationPermission";

export default function Notifications() {
  const { t } = useTranslation();
  const [sendNotifications, setSendNotifications] = useState(false);
  const [savingNotifications, setSavingNotifications] = useState(false);
  const [notificationSaveError, setNotificationSaveError] = useState<
    string | null
  >(null);

  const {
    permission,
    isChecking: isCheckingPermission,
    checkPermission,
  } = useNotificationPermission();

  useEffect(() => {
    window.settingsAPI?.getConfig().then((config) => {
      if (config?.sendNotifications !== undefined) {
        setSendNotifications(config.sendNotifications);
      }
    });
  }, []);

  const handleSendNotificationsToggle = async () => {
    const newValue = !sendNotifications;
    setSendNotifications(newValue);
    setSavingNotifications(true);
    setNotificationSaveError(null);

    try {
      await window.settingsAPI?.setSendNotifications(newValue);
      if (newValue) {
        await checkPermission();
      }
    } catch (error) {
      console.error("Failed to save send notifications setting:", error);
      setNotificationSaveError(
        t("errors.saveFailed")
      );
      setSendNotifications(!newValue);
    } finally {
      setSavingNotifications(false);
    }
  };

  const handleOpenNotificationSettings = useCallback(async () => {
    try {
      await window.settingsAPI?.openNotificationSettings();
      setTimeout(() => {
        checkPermission();
      }, 2000);
      setTimeout(() => {
        checkPermission();
      }, 5000);
    } catch (error) {
      console.error("Failed to open notification settings:", error);
    }
  }, [checkPermission]);

  const isPermissionGranted = permission?.permission === "granted";
  const isPermissionDenied = permission?.permission === "denied";
  const showPermissionWarning = sendNotifications && !isPermissionGranted;

  // Periodically check permission status when feature is enabled and permission is not granted
  useEffect(() => {
    if (sendNotifications && !isPermissionGranted) {
      const interval = setInterval(() => {
        checkPermission();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [sendNotifications, isPermissionGranted, checkPermission]);

  return (
    <div className="max-w-2xl animate-fade-in">
      <h2 className="text-2xl font-bold text-theme-text-primary mb-2">
        {t("settings.notifications.title")}
      </h2>
      <p className="text-theme-text-secondary mb-8">
        {t("settings.notifications.subtitle")}
      </p>

      <SettingCard
        icon={
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
        }
        title={t("settings.notifications.sendNotifications.title")}
        description={t("settings.notifications.sendNotifications.description")}
        error={notificationSaveError}
      >
        <ToggleSwitch
          checked={sendNotifications}
          onChange={handleSendNotificationsToggle}
          disabled={savingNotifications}
          statusLabel={
            sendNotifications ? (
              <>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400">{t("common.active")}</span>
              </>
            ) : (
              <>
                <div className="w-2 h-2 bg-theme-text-muted rounded-full" />
                <span className="text-theme-text-muted">
                  {t("common.inactive")}
                </span>
              </>
            )
          }
        />

        {showPermissionWarning && (
          <NotificationPermissionWarning
            isCheckingPermission={isCheckingPermission}
            isPermissionDenied={isPermissionDenied}
            onOpenSettings={handleOpenNotificationSettings}
          />
        )}
      </SettingCard>
    </div>
  );
}

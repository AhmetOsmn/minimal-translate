import { useCallback, useEffect, useState } from "react";
import type { NotificationPermissionState } from "../../types/notification-permission-state";

export function useNotificationPermission() {
  const [permission, setPermission] = useState<NotificationPermissionState | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  const checkPermission = useCallback(async () => {
    setIsChecking(true);
    try {
      const result = await window.settingsAPI?.checkNotificationPermission();
      if (result) {
        setPermission(result);
      }
    } catch (error) {
      console.error("Failed to check notification permission:", error);
    } finally {
      setIsChecking(false);
    }
  }, []);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  return { permission, isChecking, checkPermission };
}


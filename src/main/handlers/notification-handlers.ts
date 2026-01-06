import { ipcMain, Notification, shell } from "electron";
import { store } from "../store";

export function registerNotificationHandlers(): void {
  ipcMain.handle("get-send-notifications", () => {
    try {
      return (store.get("sendNotifications") as boolean) ?? false;
    } catch (error) {
      console.error("Failed to get send notifications:", error);
      return false;
    }
  });

  ipcMain.handle("set-send-notifications", (_, value: boolean) => {
    try {
      store.set("sendNotifications", value);
      return { success: true };
    } catch (error) {
      console.error("Failed to set send notifications:", error);
      throw new Error("Ayarlar kaydedilemedi");
    }
  });

  ipcMain.handle("check-notification-permission", async () => {
    try {
      if (!Notification.isSupported()) {
        return { supported: false, permission: "not-supported" };
      }

      if (process.platform === "darwin") {
        try {
          const testNotification = new Notification({
            title: " ",
            body: " ",
            silent: true,
          });
          testNotification.show();
          testNotification.close();
          return { supported: true, permission: "granted" };
        } catch (error) {
          return { supported: true, permission: "default" };
        }
      } else {
        const permission = (Notification as any).permission || "default";
        return {
          supported: true,
          permission: permission,
        };
      }
    } catch (error) {
      console.error("Failed to check notification permission:", error);
      return { supported: false, permission: "unknown" };
    }
  });

  ipcMain.handle("request-notification-permission", async () => {
    try {
      if (!Notification.isSupported()) {
        return { success: false, error: "Notifications are not supported" };
      }

      const sendNotifications =
        (store.get("sendNotifications") as boolean) ?? false;
      if (!sendNotifications) {
        return {
          success: false,
          permission: "default",
          error: "Please enable notifications in settings first",
        };
      }

      if (process.platform === "darwin") {
        try {
          const testNotification = new Notification({
            title: " ",
            body: " ",
            silent: true,
          });
          testNotification.show();
          testNotification.close();
          return { success: true, permission: "granted" };
        } catch (error) {
          return {
            success: false,
            permission: "default",
            error: "Please enable notifications in System Preferences",
          };
        }
      } else {
        return {
          success: false,
          permission: "default",
          error: "Please enable notifications in system settings",
        };
      }
    } catch (error) {
      console.error("Failed to request notification permission:", error);
      return { success: false, error: "Failed to request permission" };
    }
  });

  ipcMain.handle("open-notification-settings", async () => {
    try {
      if (process.platform === "darwin") {
        await shell.openExternal(
          "x-apple.systempreferences:com.apple.preference.notifications"
        );
        return { success: true };
      } else if (process.platform === "win32") {
        await shell.openExternal("ms-settings:notifications");
        return { success: true };
      } else {
        await shell.openExternal("settings://notifications");
        return { success: true };
      }
    } catch (error) {
      console.error("Failed to open notification settings:", error);
      return { success: false, error: "Failed to open notification settings" };
    }
  });
}


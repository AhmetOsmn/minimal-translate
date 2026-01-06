import { safeStorage } from "electron";
import { store } from "./store";

export function encryptApiKey(key: string): string | null {
  if (!key) return null;

  try {
    if (!safeStorage.isEncryptionAvailable()) {
      console.warn("Safe storage encryption is not available");
      return null;
    }

    const encrypted = safeStorage.encryptString(key);
    return encrypted.toString("base64");
  } catch (error) {
    console.error("Failed to encrypt API key:", error);
    return null;
  }
}

export function decryptApiKey(encryptedKey: string): string | null {
  if (!encryptedKey) return null;

  try {
    if (!safeStorage.isEncryptionAvailable()) {
      console.warn("Safe storage encryption is not available");
      return null;
    }

    const buffer = Buffer.from(encryptedKey, "base64");
    return safeStorage.decryptString(buffer);
  } catch (error) {
    console.error("Failed to decrypt API key:", error);
    return null;
  }
}

export function getDecryptedApiKeys(): Record<string, string> {
  const encryptedKeys =
    (store.get("encryptedApiKeys") as Record<string, string>) || {};
  const decrypted: Record<string, string> = {};

  for (const [key, encryptedValue] of Object.entries(encryptedKeys)) {
    const decryptedValue = decryptApiKey(encryptedValue);
    if (decryptedValue) {
      decrypted[key] = decryptedValue;
    }
  }

  return decrypted;
}

export function setEncryptedApiKeys(keys: Record<string, string>): void {
  const encrypted: Record<string, string> = {};

  for (const [key, value] of Object.entries(keys)) {
    if (value) {
      const encryptedValue = encryptApiKey(value);
      if (encryptedValue) {
        encrypted[key] = encryptedValue;
      }
    }
  }

  store.set("encryptedApiKeys", encrypted);
}

export function migratePlainTextKeys(): void {
  const oldApiKeys = (store as any).get("apiKeys") as
    | Record<string, string>
    | undefined;

  if (!oldApiKeys) return;

  const hasKeysToMigrate = Object.values(oldApiKeys).some(
    (key) => key && key.length > 0
  );

  if (!hasKeysToMigrate) {
    (store as any).delete("apiKeys");
    return;
  }

  const encryptedKeys = store.get("encryptedApiKeys") as
    | Record<string, string>
    | undefined;
  const hasEncryptedKeys =
    encryptedKeys && Object.keys(encryptedKeys).length > 0;

  if (hasEncryptedKeys) {
    (store as any).delete("apiKeys");
    return;
  }

  if (safeStorage.isEncryptionAvailable()) {
    setEncryptedApiKeys(oldApiKeys);
    (store as any).delete("apiKeys");
    console.log("Migrated plain text API keys to encrypted storage");
  } else {
    console.warn("Encryption not available, cannot migrate API keys");
  }
}


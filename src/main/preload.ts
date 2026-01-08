import { contextBridge, ipcRenderer } from 'electron'

// Expose APIs for translate window
contextBridge.exposeInMainWorld('electronAPI', {
  translate: (text: string) => ipcRenderer.invoke('translate', text),
  copyToClipboard: (text: string) => ipcRenderer.invoke('copy-to-clipboard', text),
  closeWindow: () => ipcRenderer.invoke('close-translate-window'),
  getSelectedModel: () => ipcRenderer.invoke('get-selected-model'),
  setSelectedModel: (modelId: string) => ipcRenderer.invoke('set-selected-model', modelId),
  getEnableRefinement: () => ipcRenderer.invoke('get-enable-refinement'),
  setEnableRefinement: (value: boolean) => ipcRenderer.invoke('set-enable-refinement', value),
  getTargetLanguage: () => ipcRenderer.invoke('get-target-language'),
  getDarkMode: () => ipcRenderer.invoke('get-dark-mode'),
  openSettings: () => ipcRenderer.invoke('open-settings'),
  onFocusInput: (callback: () => void) => {
    ipcRenderer.on('focus-input', () => callback())
  },
})

// Expose APIs for settings window
contextBridge.exposeInMainWorld('settingsAPI', {
  getConfig: () => ipcRenderer.invoke('get-config'),
  saveConfig: (config: Record<string, unknown>) => ipcRenderer.invoke('save-config', config),
  testApiKey: (provider: string, apiKey: string) => ipcRenderer.invoke('test-api-key', provider, apiKey),
  registerShortcut: (shortcut: string) => ipcRenderer.invoke('register-shortcut', shortcut),
  pauseGlobalShortcut: () => ipcRenderer.invoke('pause-global-shortcut'),
  resumeGlobalShortcut: () => ipcRenderer.invoke('resume-global-shortcut'),
  closeWindow: () => ipcRenderer.invoke('close-settings-window'),
  listOpenRouterModels: () => ipcRenderer.invoke('openrouter-list-models'),
  getVersion: () => ipcRenderer.invoke('get-app-version'),
  getUiLanguage: () => ipcRenderer.invoke('get-ui-language'),
  setUiLanguage: (language: 'en' | 'tr') => ipcRenderer.invoke('set-ui-language', language),
  getSendNotifications: () => ipcRenderer.invoke('get-send-notifications'),
  setSendNotifications: (value: boolean) => ipcRenderer.invoke('set-send-notifications', value),
  checkNotificationPermission: () => ipcRenderer.invoke('check-notification-permission'),
  requestNotificationPermission: () => ipcRenderer.invoke('request-notification-permission'),
  openNotificationSettings: () => ipcRenderer.invoke('open-notification-settings'),
})


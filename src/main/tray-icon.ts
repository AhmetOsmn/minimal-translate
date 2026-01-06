import { nativeImage } from 'electron'

// Create a simple 16x16 tray icon using raw data
// This is a simple "T" icon for translate
export function createTrayIcon(): Electron.NativeImage {
  // Base64 encoded 16x16 PNG icon
  const iconBase64 = `
    iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlz
    AAALEwAACxMBAJqcGAAAAJhJREFUOI3tk7ENwCAMBM8SYgHWYAqGyBJswBqswBCswQKMwAoJBSmC
    QEIi0/gp7P/fOftlABjHUQDQAJxzWmsJwAFomgbOOQAIITDPc/LGGMYYxhjsANZaee9TXmuNlBJK
    qW0BrLWYpil5YwyEEL8FvPcYhiF55xyllH8HxBgxz3Pysdbqt4B3HqUU+76/BeScUUqhtf5rwA1I
    VjVYXCfYOAAAAABJRU5ErkJggg==
  `.trim().replace(/\s/g, '')

  try {
    return nativeImage.createFromDataURL(`data:image/png;base64,${iconBase64}`)
  } catch {
    // Fallback to empty image if base64 fails
    return nativeImage.createEmpty()
  }
}

// Template icon for macOS (monochrome)
export function createTemplateIcon(): Electron.NativeImage {
  const icon = createTrayIcon()
  icon.setTemplateImage(true)
  return icon
}


import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

export default function Shortcuts() {
  const { t } = useTranslation()
  const [currentShortcut, setCurrentShortcut] = useState('CommandOrControl+Shift+T')
  const [isRecording, setIsRecording] = useState(false)
  const [recordedKeys, setRecordedKeys] = useState<string[]>([])
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    window.settingsAPI?.getConfig().then((config) => {
      if (config?.shortcut) {
        setCurrentShortcut(config.shortcut)
      }
    })
  }, [])

  const formatShortcut = (shortcut: string) => {
    return shortcut
      .replace('CommandOrControl', '⌘/Ctrl')
      .replace('Command', '⌘')
      .replace('Control', 'Ctrl')
      .replace('Shift', '⇧')
      .replace('Alt', '⌥')
      .replace('Option', '⌥')
      .replace(/\+/g, ' + ')
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isRecording) return
    
    e.preventDefault()
    e.stopPropagation()
    
    const keys: string[] = []
    
    if (e.metaKey || e.ctrlKey) {
      keys.push('CommandOrControl')
    }
    if (e.shiftKey) {
      keys.push('Shift')
    }
    if (e.altKey) {
      keys.push('Alt')
    }
    
    // Get the actual key (excluding modifiers)
    const key = e.key.toUpperCase()
    if (!['CONTROL', 'SHIFT', 'ALT', 'META', 'COMMAND'].includes(key)) {
      keys.push(key)
    }
    
    setRecordedKeys(keys)
  }, [isRecording])

  const handleKeyUp = useCallback((_e: KeyboardEvent) => {
    // Recording continues until user clicks Save or Cancel
    // This allows trying different key combinations
  }, [])

  useEffect(() => {
    if (isRecording) {
      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
      }
    }
  }, [isRecording, handleKeyDown, handleKeyUp])

  const startRecording = async () => {
    // Pause global shortcut while recording
    await window.settingsAPI?.pauseGlobalShortcut()
    setIsRecording(true)
    setRecordedKeys([])
    setError('')
    setSaved(false)
  }

  const cancelRecording = async () => {
    setIsRecording(false)
    setRecordedKeys([])
    // Resume global shortcut
    await window.settingsAPI?.resumeGlobalShortcut()
  }

  const saveShortcut = async () => {
    if (recordedKeys.length < 2) {
      setError(t('settings.shortcuts.invalidShortcut'))
      return
    }

    const newShortcut = recordedKeys.join('+')
    setSaving(true)
    setError('')

    try {
      const result = await window.settingsAPI?.registerShortcut(newShortcut)
      
      if (result?.success) {
        setCurrentShortcut(newShortcut)
        await window.settingsAPI?.saveConfig({ shortcut: newShortcut })
        setRecordedKeys([])
        setIsRecording(false)
        setSaved(true)
        // Resume global shortcut after saving
        await window.settingsAPI?.resumeGlobalShortcut()
        setTimeout(() => setSaved(false), 2000)
      } else {
        setError(result?.error || t('settings.shortcuts.saveFailed'))
      }
    } catch (err) {
      setError(t('settings.shortcuts.saveError'))
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-2xl animate-fade-in">
      <h2 className="text-2xl font-bold text-theme-text-primary mb-2">{t('settings.shortcuts.title')}</h2>
      <p className="text-theme-text-secondary mb-8">
        {t('settings.shortcuts.subtitle')}
      </p>

      {/* Current active shortcut */}
      <div className="card p-5 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <label className="text-sm text-theme-text-secondary block mb-1">{t('settings.shortcuts.activeShortcut')}</label>
            <div className="flex items-center gap-1">
              {currentShortcut.split('+').map((key, index) => (
                <span key={index} className="flex items-center">
                  {index > 0 && <span className="text-theme-text-muted mx-1">+</span>}
                  <kbd className="px-2.5 py-1.5 bg-theme-button-secondary-bg border border-theme-border-secondary rounded-md text-theme-text-primary font-mono text-sm">
                    {formatShortcut(key)}
                  </kbd>
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">{t('common.active')}</span>
          </div>
        </div>
      </div>

      {/* New shortcut recording */}
      <div className="card p-6 mb-6">
        <label className="text-sm text-theme-text-secondary mb-3 block">
          {isRecording ? t('settings.shortcuts.newShortcut') : t('settings.shortcuts.changeShortcut')}
        </label>
        
        <div className={`p-4 rounded-lg border-2 border-dashed transition-colors ${
          isRecording 
            ? 'border-accent-500 bg-accent-500/5' 
            : 'border-theme-border-secondary bg-theme-bg-tertiary/30'
        }`}>
          <div className="flex items-center justify-center gap-2 min-h-[48px]">
            {!isRecording ? (
              <span className="text-theme-text-muted text-sm">
                {t('settings.shortcuts.clickToSet')}
              </span>
            ) : recordedKeys.length === 0 ? (
              <span className="text-theme-text-secondary animate-pulse">
                {t('settings.shortcuts.pressKeys')}
              </span>
            ) : (
              <div className="flex items-center gap-2">
                {recordedKeys.map((key, index) => (
                  <span key={index}>
                    {index > 0 && <span className="text-theme-text-muted mx-1">+</span>}
                    <kbd className="px-3 py-2 bg-accent-500/20 border border-accent-500/50 rounded-lg text-accent-300 font-mono text-sm shadow-lg">
                      {formatShortcut(key)}
                    </kbd>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex gap-3">
          {!isRecording ? (
            <button
              onClick={startRecording}
              className="btn-primary flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
              </svg>
              {t('settings.shortcuts.setNew')}
            </button>
          ) : (
            <>
              <button
                onClick={saveShortcut}
                disabled={recordedKeys.length < 2 || saving}
                className="btn-primary flex items-center gap-2 disabled:opacity-50"
              >
                {saving ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                )}
                {t('common.save')}
              </button>
              <button
                onClick={cancelRecording}
                className="btn-secondary"
              >
                {t('common.cancel')}
              </button>
            </>
          )}
        </div>

        {/* Error message */}
        {error && (
          <div className="mt-4 text-sm text-red-400 flex items-center gap-2 animate-fade-in">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {error}
          </div>
        )}

        {/* Success message */}
        {saved && (
          <div className="mt-4 text-sm text-green-400 flex items-center gap-2 animate-fade-in">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {t('settings.shortcuts.saveSuccess')}
          </div>
        )}
      </div>

      {/* Tips */}
      <div className="card p-5">
        <h3 className="text-theme-text-primary font-medium mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-theme-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          {t('common.tips')}
        </h3>
        <ul className="space-y-2 text-sm text-theme-text-secondary">
          <li className="flex items-start gap-2">
            <span className="text-accent-400">•</span>
            {t('settings.shortcuts.tips.tip1')}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-400">•</span>
            {t('settings.shortcuts.tips.tip2')}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-400">•</span>
            {t('settings.shortcuts.tips.tip3')}
          </li>
        </ul>
      </div>
    </div>
  )
}


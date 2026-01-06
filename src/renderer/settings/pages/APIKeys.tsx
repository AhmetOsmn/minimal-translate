import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import type { ApiKeyField } from '../../types/api-key-field'

const getApiKeyFields = (t: (key: string) => string): ApiKeyField[] => [
  {
    id: 'openai',
    name: t('settings.apikeys.openai'),
    placeholder: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    helpUrl: 'https://platform.openai.com/api-keys',
  },
  {
    id: 'gemini',
    name: t('settings.apikeys.gemini'),
    placeholder: 'AIzaSy...',
    helpUrl: 'https://makersuite.google.com/app/apikey',
  },
  {
    id: 'openrouter',
    name: t('settings.apikeys.openrouter'),
    placeholder: 'sk-or-v1-...',
    helpUrl: 'https://openrouter.ai/keys',
  },
]

export default function APIKeys() {
  const { t } = useTranslation()
  const [apiKeys, setApiKeys] = useState<Record<string, string>>({
    openai: '',
    gemini: '',
    openrouter: '',
  })
  const [visibleKeys, setVisibleKeys] = useState<Record<string, boolean>>({})
  const [testing, setTesting] = useState<string | null>(null)
  const [testResults, setTestResults] = useState<Record<string, { success: boolean; message: string }>>({})
  const [saving, setSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)

  useEffect(() => {
    window.settingsAPI?.getConfig().then((config) => {
      if (config?.apiKeys) {
        setApiKeys(config.apiKeys)
      }
    })
  }, [])

  const handleKeyChange = (id: string, value: string) => {
    setApiKeys((prev) => ({ ...prev, [id]: value }))
    // Clear test result when key changes
    setTestResults((prev) => {
      const next = { ...prev }
      delete next[id]
      return next
    })
  }

  const toggleVisibility = (id: string) => {
    setVisibleKeys((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const testApiKey = async (id: string) => {
    if (!apiKeys[id]) return

    setTesting(id)
    try {
      const result = await window.settingsAPI?.testApiKey(id, apiKeys[id])
      setTestResults((prev) => ({
        ...prev,
        [id]: {
          success: result?.success ?? false,
          message: result?.success 
            ? t('settings.apikeys.testSuccess') 
            : (result?.errorCode 
              ? t(result.errorCode, result.errorParams) 
              : result?.error || t('settings.apikeys.testFailed')),
        },
      }))
    } catch (error) {
      setTestResults((prev) => ({
        ...prev,
        [id]: { success: false, message: t('settings.apikeys.testError') },
      }))
    } finally {
      setTesting(null)
    }
  }

  const saveAllKeys = async () => {
    setSaving(true)
    setSaveSuccess(false)
    setSaveError(null)
    try {
      await window.settingsAPI?.saveConfig({ apiKeys })
      setSaveSuccess(true)
      // Hide success message after 3 seconds
      setTimeout(() => setSaveSuccess(false), 3000)
    } catch (error) {
      console.error('Failed to save API keys:', error)
      setSaveError(t('errors.saveFailed'))
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-2xl animate-fade-in">
      <h2 className="text-2xl font-bold text-theme-text-primary mb-2">{t('settings.apikeys.title')}</h2>
      <p className="text-theme-text-secondary mb-8">
        {t('settings.apikeys.subtitle')}
      </p>

      <div className="space-y-6">
        {getApiKeyFields(t).map((field, index) => (
          <div
            key={field.id}
            className="card p-5 animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <label className="text-theme-text-primary font-medium">{field.name}</label>
              <a
                href={field.helpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent-400 hover:text-accent-300 flex items-center gap-1"
              >
                {t('settings.apikeys.getApiKey')}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type={visibleKeys[field.id] ? 'text' : 'password'}
                  value={apiKeys[field.id]}
                  onChange={(e) => handleKeyChange(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  className="input-field pr-10 font-mono text-sm"
                />
                <button
                  onClick={() => toggleVisibility(field.id)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-theme-text-secondary hover:text-theme-text-primary transition-colors"
                >
                  {visibleKeys[field.id] ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>

              <button
                onClick={() => testApiKey(field.id)}
                disabled={!apiKeys[field.id] || testing === field.id}
                className="btn-secondary px-4 flex items-center gap-2 disabled:opacity-50"
              >
                {testing === field.id ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {t('common.test')}
              </button>
            </div>

            {/* Test result */}
            {testResults[field.id] && (
              <div className={`mt-3 text-sm flex items-center gap-2 animate-fade-in ${
                testResults[field.id].success ? 'text-green-400' : 'text-red-400'
              }`}>
                {testResults[field.id].success ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                {testResults[field.id].message}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Save button */}
      <div className="mt-8 flex items-center justify-end gap-4">
        {saveSuccess && (
          <div className="flex items-center gap-2 text-green-400 text-sm animate-fade-in">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {t('common.saved')}
          </div>
        )}
        {saveError && (
          <div className="flex items-center gap-2 text-red-400 text-sm animate-fade-in">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {saveError}
          </div>
        )}
        <button
          onClick={saveAllKeys}
          disabled={saving}
          className="btn-primary flex items-center gap-2"
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
      </div>

      {/* Security note */}
      <div className="mt-6 p-4 bg-theme-bg-tertiary/50 rounded-lg border border-theme-border-secondary/50">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <p className="text-sm text-theme-text-secondary">
            {t('settings.apikeys.securityNote')}
          </p>
        </div>
      </div>
    </div>
  )
}


import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function HowToUse() {
  const { t } = useTranslation()
  const [shortcut, setShortcut] = useState('CommandOrControl+Shift+T')

  useEffect(() => {
    window.settingsAPI?.getConfig().then((config) => {
      if (config?.shortcut) {
        setShortcut(config.shortcut)
      }
    })
  }, [])

  const formatKey = (key: string) => {
    return key
      .replace('CommandOrControl', '⌘/Ctrl')
      .replace('Command', '⌘')
      .replace('Control', 'Ctrl')
      .replace('Shift', '⇧')
      .replace('Alt', '⌥')
      .replace('Option', '⌥')
  }

  const ShortcutKeys = () => (
    <div className="flex items-center gap-1 mt-2">
      {shortcut.split('+').map((key, index) => (
        <span key={index} className="flex items-center">
          {index > 0 && <span className="text-theme-text-muted mx-1">+</span>}
          <kbd className="px-2 py-1 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-theme-text-primary font-mono text-xs">
            {formatKey(key)}
          </kbd>
        </span>
      ))}
    </div>
  )

  const steps = [
    {
      number: '1',
      title: t('settings.howto.step1.title'),
      description: t('settings.howto.step1.description'),
      extra: <ShortcutKeys />,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
    },
    {
      number: '2',
      title: t('settings.howto.step2.title'),
      description: t('settings.howto.step2.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      ),
    },
    {
      number: '3',
      title: t('settings.howto.step3.title'),
      description: t('settings.howto.step3.description'),
      extra: (
        <div className="mt-2">
          <kbd className="px-2 py-1 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-theme-text-primary font-mono text-xs">
            ↵ Enter
          </kbd>
        </div>
      ),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
      ),
    },
    {
      number: '4',
      title: t('settings.howto.step4.title'),
      description: t('settings.howto.step4.description'),
      extra: (
        <div className="flex items-center gap-1 mt-2">
          <kbd className="px-2 py-1 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-theme-text-primary font-mono text-xs">
            ⌘/Ctrl
          </kbd>
          <span className="text-theme-text-muted mx-1">+</span>
          <kbd className="px-2 py-1 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-theme-text-primary font-mono text-xs">
            V
          </kbd>
        </div>
      ),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
    },
  ]

  const tips = [
    t('settings.howto.tips.tip1'),
    t('settings.howto.tips.tip2'),
    t('settings.howto.tips.tip3'),
    t('settings.howto.tips.tip4'),
  ]

  return (
    <div className="max-w-2xl animate-fade-in">
      <h2 className="text-2xl font-bold text-theme-text-primary mb-2">{t('settings.howto.title')}</h2>
      <p className="text-theme-text-secondary mb-8">
        {t('settings.howto.subtitle')}
      </p>

      {/* Steps */}
      <div className="space-y-4 mb-10">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="card p-4 flex items-start gap-4 animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center text-accent-400 flex-shrink-0">
              {step.icon}
            </div>
            <div>
              <h3 className="text-theme-text-primary font-medium mb-1">
                <span className="text-accent-400 mr-2">{step.number}.</span>
                {step.title}
              </h3>
              <p className="text-sm text-theme-text-secondary">{step.description}</p>
              {step.extra}
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div>
        <h3 className="text-lg font-semibold text-theme-text-primary mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
          {t('common.tips')}
        </h3>
        <ul className="space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-theme-text-tertiary">
              <span className="text-accent-400 mt-0.5">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


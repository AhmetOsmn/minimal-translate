import { Trans, useTranslation } from 'react-i18next'

export default function Shortcuts() {
  const { t } = useTranslation()
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold text-theme-text-primary mb-4">{t('common.shortcuts')}</h1>
      <p className="text-lg text-theme-text-secondary mb-8">
        {t('settings.shortcuts.subtitle')}
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.shortcuts.defaultShortcut')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.shortcuts.defaultShortcutDesc')}
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <kbd className="px-4 py-2 bg-theme-button-secondary-bg border border-theme-border-secondary rounded-lg text-sm font-mono">
                  Ctrl+Shift+T
                </kbd>
                <span className="text-theme-text-secondary">(Windows/Linux)</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-4 py-2 bg-theme-button-secondary-bg border border-theme-border-secondary rounded-lg text-sm font-mono">
                  Cmd+Shift+T
                </kbd>
                <span className="text-theme-text-secondary">(macOS)</span>
              </div>
            </div>
            <p className="text-theme-text-tertiary text-sm">
              {t('settings.shortcuts.defaultShortcutNote')}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.shortcuts.changeShortcut')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.shortcuts.changeShortcutDesc')}
            </p>
            <ol className="list-decimal list-inside space-y-3 text-theme-text-secondary">
              <li>{t('settings.shortcuts.changeShortcutStep1')}</li>
              <li>{t('settings.shortcuts.changeShortcutStep2')}</li>
              <li>{t('settings.shortcuts.changeShortcutStep3')}</li>
              <li>
                <Trans
                  i18nKey="settings.shortcuts.changeShortcutStep4"
                  components={{
                    kbd: <kbd className="px-2 py-1 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-xs" />
                  }}
                />
              </li>
              <li>{t('settings.shortcuts.changeShortcutStep5')}</li>
              <li>{t('settings.shortcuts.changeShortcutStep6')}</li>
              <li>{t('settings.shortcuts.changeShortcutStep7')}</li>
            </ol>
            <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-theme-text-secondary">
                <Trans
                  i18nKey="settings.shortcuts.changeShortcutWarning"
                  components={{
                    strong: <strong className="text-theme-text-primary" />
                  }}
                />
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.shortcuts.supportedKeys')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.shortcuts.supportedKeysDesc')}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-theme-text-primary mb-2">{t('settings.shortcuts.modifierKeys')}</h3>
                <ul className="list-disc list-inside space-y-1 text-theme-text-secondary text-sm">
                  <li>{t('settings.shortcuts.modifierKey1')}</li>
                  <li>{t('settings.shortcuts.modifierKey2')}</li>
                  <li>{t('settings.shortcuts.modifierKey3')}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-theme-text-primary mb-2">{t('settings.shortcuts.characterKeys')}</h3>
                <ul className="list-disc list-inside space-y-1 text-theme-text-secondary text-sm">
                  <li>{t('settings.shortcuts.characterKey1')}</li>
                  <li>{t('settings.shortcuts.characterKey2')}</li>
                  <li>{t('settings.shortcuts.characterKey3')}</li>
                  <li>{t('settings.shortcuts.characterKey4')}</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-theme-bg-tertiary/50 rounded-lg border border-theme-border-secondary/50">
              <p className="text-sm text-theme-text-secondary">
                <Trans
                  i18nKey="settings.shortcuts.supportedKeysNote"
                  components={{
                    strong: <strong className="text-theme-text-primary" />
                  }}
                />
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.shortcuts.testShortcut')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.shortcuts.testShortcutDesc')}
            </p>
            <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary">
              <li>{t('settings.shortcuts.testShortcutStep1')}</li>
              <li>{t('settings.shortcuts.testShortcutStep2')}</li>
              <li>{t('settings.shortcuts.testShortcutStep3')}</li>
              <li>{t('settings.shortcuts.testShortcutStep4')}</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('common.tips')}</h2>
          <div className="card p-6">
            <ul className="space-y-3 text-theme-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t('settings.shortcuts.shortcutTip1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t('settings.shortcuts.shortcutTip2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t('settings.shortcuts.shortcutTip3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t('settings.shortcuts.shortcutTip4')}</span>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  )
}


import { Trans, useTranslation } from 'react-i18next'

export default function Notifications() {
  const { t } = useTranslation()
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold text-theme-text-primary mb-4">{t('common.notifications')}</h1>
      <p className="text-lg text-theme-text-secondary mb-8">
        {t('settings.notifications.subtitle')}
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.notifications.enable')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.notifications.enableDesc')}
            </p>
            <ol className="list-decimal list-inside space-y-3 text-theme-text-secondary">
              <li>{t('settings.notifications.enableStep1')}</li>
              <li>{t('settings.notifications.enableStep2')}</li>
              <li>{t('settings.notifications.enableStep3')}</li>
              <li>{t('settings.notifications.enableStep4')}</li>
              <li>{t('settings.notifications.enableStep5')}</li>
            </ol>
            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-theme-text-secondary">
                <Trans
                  i18nKey="settings.notifications.enableNote"
                  components={{
                    strong: <strong className="text-theme-text-primary" />
                  }}
                />
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.notifications.grantPermission')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.notifications.grantPermissionDesc')}
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-theme-text-primary mb-2">{t('settings.notifications.macosTitle')}</h3>
                <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary text-sm">
                  <li>{t('settings.notifications.macosStep1')}</li>
                  <li>{t('settings.notifications.macosStep2')}</li>
                  <li>{t('settings.notifications.macosStep3')}</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-theme-text-primary mb-2">{t('settings.notifications.windowsTitle')}</h3>
                <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary text-sm">
                  <li>{t('settings.notifications.windowsStep1')}</li>
                  <li>{t('settings.notifications.windowsStep2')}</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-theme-text-primary mb-2">{t('settings.notifications.linuxTitle')}</h3>
                <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary text-sm">
                  <li>{t('settings.notifications.linuxStep1')}</li>
                  <li>{t('settings.notifications.linuxStep2')}</li>
                  <li>{t('settings.notifications.linuxStep3')}</li>
                </ol>
              </div>
            </div>

            <div className="mt-4 p-4 bg-theme-bg-tertiary/50 rounded-lg border border-theme-border-secondary/50">
              <p className="text-sm text-theme-text-secondary">
                <Trans
                  i18nKey="settings.notifications.grantPermissionQuickAccess"
                  components={{
                    strong: <strong className="text-theme-text-primary" />
                  }}
                />
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.notifications.howItWorks')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.notifications.howItWorksDesc')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-theme-text-secondary">
              <li>{t('settings.notifications.howItWorks1')}</li>
              <li>{t('settings.notifications.howItWorks2')}</li>
              <li>{t('settings.notifications.howItWorks3')}</li>
            </ul>
            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-sm text-theme-text-secondary">
                {t('settings.notifications.howItWorksNote')}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.notifications.disable')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.notifications.disableDesc')}
            </p>
            <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary">
              <li>{t('settings.notifications.disableStep1')}</li>
              <li>{t('settings.notifications.disableStep2')}</li>
              <li>{t('settings.notifications.disableStep3')}</li>
              <li>{t('settings.notifications.disableStep4')}</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.notifications.status')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.notifications.statusDesc')}
            </p>
            <ul className="space-y-3 text-theme-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-green-400">✓</span>
                <span>{t('settings.notifications.statusActive')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">⚠</span>
                <span>{t('settings.notifications.statusPending')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">✗</span>
                <span>{t('settings.notifications.statusDenied')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-theme-text-muted">○</span>
                <span>{t('settings.notifications.statusPassive')}</span>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  )
}


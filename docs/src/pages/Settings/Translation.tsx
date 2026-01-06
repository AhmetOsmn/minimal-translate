import { Trans, useTranslation } from 'react-i18next'

export default function Translation() {
  const { t } = useTranslation()
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold text-theme-text-primary mb-4">{t('common.translation')}</h1>
      <p className="text-lg text-theme-text-secondary mb-8">
        {t('settings.translation.subtitle')}
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.translation.targetLanguage')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.translation.targetLanguageDesc')}
            </p>
            <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary">
              <li>{t('settings.translation.targetLanguageStep1')}</li>
              <li>{t('settings.translation.targetLanguageStep2')}</li>
              <li>{t('settings.translation.targetLanguageStep3')}</li>
            </ol>
            <div className="mt-4 p-4 bg-theme-bg-tertiary/50 rounded-lg border border-theme-border-secondary/50">
              <p className="text-sm text-theme-text-secondary">
                <Trans
                  i18nKey="settings.translation.targetLanguageNote"
                  components={{
                    strong: <strong className="text-theme-text-primary" />
                  }}
                />
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.translation.refineMode')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.translation.refineModeDesc')}
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-theme-text-primary mb-2">{t('settings.translation.refineModeActivate')}</h3>
                <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary">
                  <li>{t('settings.translation.refineModeActivateStep1')}</li>
                  <li>{t('settings.translation.refineModeActivateStep2')}</li>
                  <li>{t('settings.translation.refineModeActivateStep3')}</li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-theme-text-primary mb-2">{t('settings.translation.refineModeHow')}</h3>
                <ul className="list-disc list-inside space-y-2 text-theme-text-secondary">
                  <li>{t('settings.translation.refineModeHow1')}</li>
                  <li>{t('settings.translation.refineModeHow2')}</li>
                  <li>{t('settings.translation.refineModeHow3')}</li>
                  <li>{t('settings.translation.refineModeHow4')}</li>
                </ul>
              </div>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-sm text-theme-text-secondary">
                  <Trans
                    i18nKey="settings.translation.refineModeTip"
                    components={{
                      strong: <strong className="text-theme-text-primary" />
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.translation.fromWindow')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.translation.fromWindowDesc')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-theme-text-secondary">
              <li>{t('settings.translation.fromWindow1')}</li>
              <li>{t('settings.translation.fromWindow2')}</li>
              <li>{t('settings.translation.fromWindow3')}</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.translation.examples')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.translation.examplesDesc')}
            </p>
            <div className="p-4 bg-theme-bg-tertiary/50 rounded-lg border border-theme-border-secondary/50">
              <p className="text-sm text-theme-text-secondary">
                {t('settings.translation.examplesNote')}
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}


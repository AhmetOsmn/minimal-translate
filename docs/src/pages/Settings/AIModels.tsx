import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function AIModels() {
  const { t } = useTranslation()
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold text-theme-text-primary mb-4">{t('common.aiModels')}</h1>
      <p className="text-lg text-theme-text-secondary mb-8">
        {t('settings.aiModels.subtitle')}
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.aiModels.supportedModels')}</h2>

          <div className="space-y-6">
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  🤖
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-theme-text-primary mb-2">{t('settings.aiModels.openaiTitle')}</h3>
                  <p className="text-theme-text-secondary mb-3">
                    {t('settings.aiModels.openaiDesc')}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-theme-text-secondary text-sm">
                    <li>{t('settings.aiModels.openaiFeature1')}</li>
                    <li>{t('settings.aiModels.openaiFeature2')}</li>
                    <li>{t('settings.aiModels.openaiFeature3')}</li>
                  </ul>
                  <p className="text-theme-text-tertiary text-sm mt-3">
                    <Trans
                      i18nKey="settings.aiModels.openaiNote"
                      components={{
                        link: <Link to="/settings/api-keys" className="text-accent-500 hover:underline" />
                      }}
                      values={{ link: t('common.apiKeys') }}
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  ✨
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-theme-text-primary mb-2">{t('settings.aiModels.geminiTitle')}</h3>
                  <p className="text-theme-text-secondary mb-3">
                    {t('settings.aiModels.geminiDesc')}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-theme-text-secondary text-sm">
                    <li>{t('settings.aiModels.geminiFeature1')}</li>
                    <li>{t('settings.aiModels.geminiFeature2')}</li>
                    <li>{t('settings.aiModels.geminiFeature3')}</li>
                  </ul>
                  <p className="text-theme-text-tertiary text-sm mt-3">
                    <Trans
                      i18nKey="settings.aiModels.openaiNote"
                      components={{
                        link: <Link to="/settings/api-keys" className="text-accent-500 hover:underline" />
                      }}
                      values={{ link: t('common.apiKeys') }}
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  🌐
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-theme-text-primary mb-2">{t('settings.aiModels.openrouterTitle')}</h3>
                  <p className="text-theme-text-secondary mb-3">
                    {t('settings.aiModels.openrouterDesc')}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-theme-text-secondary text-sm">
                    <li>{t('settings.aiModels.openrouterFeature1')}</li>
                    <li>{t('settings.aiModels.openrouterFeature2')}</li>
                    <li>{t('settings.aiModels.openrouterFeature3')}</li>
                    <li>{t('settings.aiModels.openrouterFeature4')}</li>
                  </ul>
                  <p className="text-theme-text-tertiary text-sm mt-3">
                    <Trans
                      i18nKey="settings.aiModels.openaiNote"
                      components={{
                        link: <Link to="/settings/api-keys" className="text-accent-500 hover:underline" />
                      }}
                      values={{ link: t('common.apiKeys') }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.aiModels.modelSelection')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.aiModels.modelSelectionDesc')}
            </p>
            <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary">
              <li><Trans i18nKey="settings.aiModels.modelSelectionStep1" components={{ strong: <strong className="text-theme-text-primary" /> }} /></li>
              <li>{t('settings.aiModels.modelSelectionStep2')}</li>
              <li>{t('settings.aiModels.modelSelectionStep3')}</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.aiModels.openrouterSelection')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.aiModels.openrouterSelectionDesc')}
            </p>
            <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary">
              <li>{t('settings.aiModels.openrouterStep1')}</li>
              <li>{t('settings.aiModels.openrouterStep2')}</li>
              <li>{t('settings.aiModels.openrouterStep3')}</li>
              <li>
                <Trans
                  i18nKey="settings.aiModels.openrouterStep4"
                  components={{
                    code: <code className="px-1.5 py-0.5 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-xs" />
                  }}
                />
              </li>
            </ol>
            <div className="mt-4 p-4 bg-theme-bg-tertiary/50 rounded-lg border border-theme-border-secondary/50">
              <p className="text-sm text-theme-text-secondary">
                <Trans
                  i18nKey="settings.aiModels.openrouterNote"
                  components={{
                    strong: <strong className="text-theme-text-primary" />,
                    link: <Link to="/settings/api-keys" className="text-accent-500 hover:underline" />
                  }}
                />
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.aiModels.modelChange')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-3">
              {t('settings.aiModels.modelChangeDesc')}
            </p>
            <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary">
              <li>{t('settings.aiModels.modelChangeStep1')}</li>
              <li>{t('settings.aiModels.modelChangeStep2')}</li>
              <li>{t('settings.aiModels.modelChangeStep3')}</li>
            </ol>
          </div>
        </section>

      </div>
    </div>
  )
}


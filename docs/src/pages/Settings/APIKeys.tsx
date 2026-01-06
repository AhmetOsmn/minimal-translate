import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import CodeBlock from '../../components/CodeBlock'

export default function APIKeys() {
  const { t } = useTranslation()
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold text-theme-text-primary mb-4">{t('common.apiKeys')}</h1>
      <p className="text-lg text-theme-text-secondary mb-8">
        {t('settings.apiKeys.subtitle')}
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.apiKeys.generalInfo')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.apiKeys.generalInfoDesc')}
            </p>
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg mt-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <p className="text-sm text-theme-text-secondary">
                  <Trans
                    i18nKey="settings.apiKeys.securityNote"
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
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.apiKeys.openaiTitle')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.apiKeys.openaiDesc')}
            </p>
            <ol className="list-decimal list-inside space-y-3 text-theme-text-secondary">
              <li>{t('settings.apiKeys.openaiStep1')}</li>
              <li>{t('settings.apiKeys.openaiStep2')}</li>
              <li>{t('settings.apiKeys.openaiStep3')}</li>
              <li>{t('settings.apiKeys.openaiStep4')}</li>
              <li>{t('settings.apiKeys.openaiStep5')}</li>
              <li>{t('settings.apiKeys.openaiStep6')}</li>
              <li>{t('settings.apiKeys.openaiStep7')}</li>
              <li>{t('settings.apiKeys.openaiStep8')}</li>
              <li>{t('settings.apiKeys.openaiStep9')}</li>
            </ol>
            <div className="mt-4 p-4 bg-theme-bg-tertiary/50 rounded-lg border border-theme-border-secondary/50">
              <p className="text-sm text-theme-text-secondary">
                <Trans
                  i18nKey="settings.apiKeys.openaiNote"
                  components={{
                    strong: <strong className="text-theme-text-primary" />,
                    link: <a href="https://openai.com/pricing" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline" />
                  }}
                />
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.apiKeys.geminiTitle')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.apiKeys.geminiDesc')}
            </p>
            <ol className="list-decimal list-inside space-y-3 text-theme-text-secondary">
              <li>{t('settings.apiKeys.geminiStep1')}</li>
              <li>{t('settings.apiKeys.geminiStep2')}</li>
              <li>{t('settings.apiKeys.geminiStep3')}</li>
              <li>{t('settings.apiKeys.geminiStep4')}</li>
              <li>{t('settings.apiKeys.geminiStep5')}</li>
              <li>{t('settings.apiKeys.geminiStep6')}</li>
              <li>{t('settings.apiKeys.geminiStep7')}</li>
              <li>{t('settings.apiKeys.geminiStep8')}</li>
              <li>{t('settings.apiKeys.geminiStep9')}</li>
            </ol>
            <div className="mt-4 p-4 bg-theme-bg-tertiary/50 rounded-lg border border-theme-border-secondary/50">
              <p className="text-sm text-theme-text-secondary">
                <Trans
                  i18nKey="settings.apiKeys.geminiNote"
                  components={{
                    strong: <strong className="text-theme-text-primary" />,
                    link: <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline" />
                  }}
                />
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.apiKeys.openrouterTitle')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.apiKeys.openrouterDesc')}
            </p>
            <ol className="list-decimal list-inside space-y-3 text-theme-text-secondary">
              <li>{t('settings.apiKeys.openrouterStep1')}</li>
              <li>{t('settings.apiKeys.openrouterStep2')}</li>
              <li>{t('settings.apiKeys.openrouterStep3')}</li>
              <li>{t('settings.apiKeys.openrouterStep4')}</li>
              <li>{t('settings.apiKeys.openrouterStep5')}</li>
              <li>{t('settings.apiKeys.openrouterStep6')}</li>
              <li>{t('settings.apiKeys.openrouterStep7')}</li>
              <li>{t('settings.apiKeys.openrouterStep8')}</li>
              <li>{t('settings.apiKeys.openrouterStep9')}</li>
              <li>{t('settings.apiKeys.openrouterStep10')}</li>
            </ol>
            <div className="mt-4 p-4 bg-theme-bg-tertiary/50 rounded-lg border border-theme-border-secondary/50">
              <p className="text-sm text-theme-text-secondary">
                <Trans
                  i18nKey="settings.apiKeys.openrouterNote"
                  components={{
                    strong: <strong className="text-theme-text-primary" />,
                    link: <a href="https://openrouter.ai/docs/pricing" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline" />
                  }}
                />
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.apiKeys.management')}</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-theme-text-primary mb-3">{t('settings.apiKeys.addUpdate')}</h3>
              <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary">
                <li>{t('settings.apiKeys.addUpdateStep1')}</li>
                <li>{t('settings.apiKeys.addUpdateStep2')}</li>
                <li>{t('settings.apiKeys.addUpdateStep3')}</li>
                <li>{t('settings.apiKeys.addUpdateStep4')}</li>
              </ol>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-theme-text-primary mb-3">{t('settings.apiKeys.viewHide')}</h3>
              <p className="text-theme-text-secondary mb-3">
                {t('settings.apiKeys.viewHideDesc')}
              </p>
              <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary">
                <li>{t('settings.apiKeys.viewHideStep1')}</li>
                <li>{t('settings.apiKeys.viewHideStep2')}</li>
                <li>{t('settings.apiKeys.viewHideStep3')}</li>
              </ol>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-theme-text-primary mb-3">{t('settings.apiKeys.test')}</h3>
              <p className="text-theme-text-secondary mb-3">
                {t('settings.apiKeys.testDesc')}
              </p>
              <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary">
                <li>{t('settings.apiKeys.testStep1')}</li>
                <li>{t('settings.apiKeys.testStep2')}</li>
                <li>{t('settings.apiKeys.testStep3')}</li>
                <li>{t('settings.apiKeys.testStep4')}</li>
              </ol>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}


import { Trans, useTranslation } from 'react-i18next'
import CodeBlock from '../../components/CodeBlock'

export default function Prompts() {
  const { t } = useTranslation()
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold text-theme-text-primary mb-4">{t('common.prompts')}</h1>
      <p className="text-lg text-theme-text-secondary mb-8">
        {t('settings.prompts.subtitle')}
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.prompts.whatIsPrompt')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.prompts.whatIsPromptDesc')}
            </p>
            <div className="p-4 bg-theme-bg-tertiary/50 rounded-lg border border-theme-border-secondary/50">
              <p className="text-sm text-theme-text-secondary">
                <Trans
                  i18nKey="settings.prompts.whatIsPromptExample"
                  components={{
                    strong: <strong className="text-theme-text-primary" />
                  }}
                />
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.prompts.createPrompt')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.prompts.createPromptDesc')}
            </p>
            <ol className="list-decimal list-inside space-y-3 text-theme-text-secondary">
              <li>{t('settings.prompts.createPromptStep1')}</li>
              <li>{t('settings.prompts.createPromptStep2')}</li>
              <li>
                {t('settings.prompts.createPromptStep3')}
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>{t('settings.prompts.createPromptStep3a')}</li>
                  <li>{t('settings.prompts.createPromptStep3b')}</li>
                </ul>
              </li>
              <li>{t('settings.prompts.createPromptStep4')}</li>
              <li>{t('settings.prompts.createPromptStep5')}</li>
            </ol>
            <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-theme-text-secondary">
                <Trans
                  i18nKey="settings.prompts.createPromptLimit"
                  components={{
                    strong: <strong className="text-theme-text-primary" />
                  }}
                />
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.prompts.selectPrompt')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.prompts.selectPromptDesc')}
            </p>
            <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary">
              <li>{t('settings.prompts.selectPromptStep1')}</li>
              <li>{t('settings.prompts.selectPromptStep2')}</li>
              <li>{t('settings.prompts.selectPromptStep3')}</li>
              <li>{t('settings.prompts.selectPromptStep4')}</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.prompts.editPrompt')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.prompts.editPromptDesc')}
            </p>
            <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary">
              <li>{t('settings.prompts.editPromptStep1')}</li>
              <li>{t('settings.prompts.editPromptStep2')}</li>
              <li>{t('settings.prompts.editPromptStep3')}</li>
              <li>{t('settings.prompts.editPromptStep4')}</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.prompts.deletePrompt')}</h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t('settings.prompts.deletePromptDesc')}
            </p>
            <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary">
              <li>{t('settings.prompts.deletePromptStep1')}</li>
              <li>{t('settings.prompts.deletePromptStep2')}</li>
              <li>{t('settings.prompts.deletePromptStep3')}</li>
              <li>{t('settings.prompts.deletePromptStep4')}</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('settings.prompts.examples')}</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="font-semibold text-theme-text-primary mb-2">{t('settings.prompts.example1Title')}</h3>
              <CodeBlock>
                {t('settings.prompts.example1Content')}
              </CodeBlock>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-theme-text-primary mb-2">{t('settings.prompts.example2Title')}</h3>
              <CodeBlock>
                {t('settings.prompts.example2Content')}
              </CodeBlock>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-theme-text-primary mb-2">{t('settings.prompts.example3Title')}</h3>
              <CodeBlock>
                {t('settings.prompts.example3Content')}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">{t('common.tips')}</h2>
          <div className="card p-6">
            <ul className="space-y-3 text-theme-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t('settings.prompts.promptTip1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t('settings.prompts.promptTip2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t('settings.prompts.promptTip3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t('settings.prompts.promptTip4')}</span>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  )
}


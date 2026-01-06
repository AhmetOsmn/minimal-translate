import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function HowToUse() {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold text-theme-text-primary mb-4">
        {t("common.howToUse")}
      </h1>
      <p className="text-lg text-theme-text-secondary mb-8">
        {t("settings.howToUse.subtitle")}
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-6">
            {t("settings.howToUse.stepByStep")}
          </h2>

          <div className="space-y-6">
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center text-accent-400 flex-shrink-0">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-theme-text-primary mb-2">
                    {t("settings.howToUse.useShortcut")}
                  </h3>
                  <p className="text-theme-text-secondary mb-3">
                    {t("settings.howToUse.useShortcutDesc")}
                  </p>
                  <div className="flex items-center gap-2">
                    <kbd className="px-3 py-2 bg-theme-button-secondary-bg border border-theme-border-secondary rounded-lg text-sm font-mono">
                      Ctrl+Shift+T
                    </kbd>
                    <span className="text-theme-text-secondary">
                      (Windows/Linux)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <kbd className="px-3 py-2 bg-theme-button-secondary-bg border border-theme-border-secondary rounded-lg text-sm font-mono">
                      Cmd+Shift+T
                    </kbd>
                    <span className="text-theme-text-secondary">(macOS)</span>
                  </div>
                  <p className="text-theme-text-tertiary text-sm mt-3">
                    <Trans
                      i18nKey="settings.howToUse.shortcutCustomize"
                      components={{
                        link: (
                          <Link
                            to="/settings/shortcuts"
                            className="text-accent-500 hover:underline"
                          />
                        ),
                      }}
                      values={{ link: t("common.shortcuts") }}
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center text-accent-400 flex-shrink-0">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-theme-text-primary mb-2">
                    {t("settings.howToUse.typeText")}
                  </h3>
                  <p className="text-theme-text-secondary mb-3">
                    {t("settings.howToUse.typeTextDesc")}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-theme-text-secondary text-sm">
                    <li>{t("translateWindow.textInputNote1")}</li>
                    <li>{t("translateWindow.textInputNote2")}</li>
                    <li>
                      <Trans
                        i18nKey="translateWindow.textInputNote3"
                        components={{
                          kbd1: (
                            <kbd className="px-1.5 py-0.5 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-xs" />
                          ),
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center text-accent-400 flex-shrink-0">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-theme-text-primary mb-2">
                    {t("settings.howToUse.pressEnter")}
                  </h3>
                  <p className="text-theme-text-secondary mb-3">
                    {t("settings.howToUse.pressEnterDesc")}
                  </p>
                  <div className="flex items-center gap-2">
                    <kbd className="px-3 py-2 bg-theme-button-secondary-bg border border-theme-border-secondary rounded-lg text-sm font-mono">
                      ↵ Enter
                    </kbd>
                  </div>
                  <p className="text-theme-text-tertiary text-sm mt-3">
                    {t("settings.howToUse.pressEnterNote")}
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center text-accent-400 flex-shrink-0">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-theme-text-primary mb-2">
                    {t("settings.howToUse.paste")}
                  </h3>
                  <p className="text-theme-text-secondary mb-3">
                    {t("settings.howToUse.pasteDesc")}
                  </p>
                  <div className="flex items-center gap-2">
                    <kbd className="px-3 py-2 bg-theme-button-secondary-bg border border-theme-border-secondary rounded-lg text-sm font-mono">
                      Ctrl+V
                    </kbd>
                    <span className="text-theme-text-secondary">veya</span>
                    <kbd className="px-3 py-2 bg-theme-button-secondary-bg border border-theme-border-secondary rounded-lg text-sm font-mono">
                      Cmd+V
                    </kbd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">
            {t("settings.howToUse.tipsAndTricks")}
          </h2>
          <div className="card p-6">
            <ul className="space-y-3 text-theme-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t("settings.howToUse.tip1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t("settings.howToUse.tip2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t("settings.howToUse.tip3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t("settings.howToUse.tip4")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t("settings.howToUse.tip5")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t("settings.howToUse.tip6")}</span>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}

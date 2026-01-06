import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function TranslateWindow() {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold text-theme-text-primary mb-4">
        {t("translateWindow.title")}
      </h1>
      <p className="text-lg text-theme-text-secondary mb-8">
        {t("translateWindow.subtitle")}
      </p>

      <div className="space-y-12">
        {/* Açılış */}
        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">
            {t("translateWindow.opening")}
          </h2>
          <div className="card p-6">
            <p className="text-theme-text-secondary mb-4">
              {t("translateWindow.openingDesc")}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <kbd className="px-3 py-2 bg-theme-button-secondary-bg border border-theme-border-secondary rounded-lg text-sm font-mono">
                Ctrl+Shift+T
              </kbd>
              <span className="text-theme-text-secondary">(Windows/Linux)</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-3 py-2 bg-theme-button-secondary-bg border border-theme-border-secondary rounded-lg text-sm font-mono">
                Cmd+Shift+T
              </kbd>
              <span className="text-theme-text-secondary">(macOS)</span>
            </div>
            <p className="text-theme-text-tertiary text-sm mt-4">
              <Trans
                i18nKey="translateWindow.shortcutNote"
                components={{
                  link: (
                    <Link
                      to="/settings/shortcuts"
                      className="text-accent-500 hover:underline"
                    />
                  ),
                }}
              />
            </p>
          </div>
        </section>


        {/* Özellikler */}
        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">
            {t("translateWindow.features")}
          </h2>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-theme-text-primary mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                1. {t("translateWindow.textInput")}
              </h3>
              <p className="text-theme-text-secondary">
                {t("translateWindow.textInputDesc")}
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-theme-text-secondary text-sm">
                <li>{t("translateWindow.textInputNote1")}</li>
                <li>{t("translateWindow.textInputNote2")}</li>
                <li>
                  <Trans
                    i18nKey="translateWindow.textInputNote3"
                    components={{
                      kbd1: (
                        <kbd className="px-1.5 py-0.5 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-xs" />
                      ),
                      kbd2: (
                        <kbd className="px-1.5 py-0.5 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-xs" />
                      ),
                    }}
                  />
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-theme-text-primary mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
                2. {t("translateWindow.modelSelection")}
              </h3>
              <p className="text-theme-text-secondary">
                {t("translateWindow.modelSelectionDesc")}
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-theme-text-secondary text-sm">
                <li>{t("translateWindow.modelSelectionNote1")}</li>
                <li>{t("translateWindow.modelSelectionNote2")}</li>
                <li>{t("translateWindow.modelSelectionNote3")}</li>
                <li>{t("translateWindow.modelSelectionNote4")}</li>
              </ul>
              <p className="text-theme-text-tertiary text-sm mt-3">
                <Trans
                  i18nKey="translateWindow.modelSelectionLink"
                  components={{
                    link: (
                      <Link
                        to="/settings/ai-models"
                        className="text-accent-500 hover:underline"
                      />
                    ),
                  }}
                />
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-theme-text-primary mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                3. {t("translateWindow.refineMode")}
              </h3>
              <p className="text-theme-text-secondary">
                {t("translateWindow.refineModeDesc")}
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-theme-text-secondary text-sm">
                <li>{t("translateWindow.refineModeNote1")}</li>
                <li>{t("translateWindow.refineModeNote2")}</li>
                <li>{t("translateWindow.refineModeNote3")}</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-theme-text-primary mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
                4. {t("translateWindow.translate")}
              </h3>
              <p className="text-theme-text-secondary mb-3">
                {t("translateWindow.translateDesc")}
              </p>
              <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary">
                <li>
                  <strong className="text-theme-text-primary">
                    {t("translateWindow.translateStep1")}
                  </strong>
                </li>
                <li>{t("translateWindow.translateStep2")}</li>
              </ol>
              <p className="text-theme-text-secondary mt-3">
                {t("translateWindow.translateDesc")}:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-theme-text-secondary text-sm">
                <li>{t("translateWindow.translateResult1")}</li>
                <li>{t("translateWindow.translateResult2")}</li>
                <li>{t("translateWindow.translateResult3")}</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-theme-text-primary mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                5. {t("translateWindow.closing")}
              </h3>
              <p className="text-theme-text-secondary">
                {t("translateWindow.closingDesc")}
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-theme-text-secondary">
                <li>
                  {t("translateWindow.closingStep1")}:{" "}
                  <kbd className="px-2 py-1 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-sm">
                    ESC
                  </kbd>
                </li>
                <li>{t("translateWindow.closingStep2")}</li>
                <li>{t("translateWindow.closingStep3")}</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-theme-text-primary mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                6. {t("translateWindow.settings")}
              </h3>
              <p className="text-theme-text-secondary">
                {t("translateWindow.settingsDesc")}
              </p>
            </div>
          </div>
        </section>

        {/* İpuçları */}
        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">
            {t("translateWindow.tips")}
          </h2>
          <div className="card p-6">
            <ul className="space-y-3 text-theme-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t("translateWindow.tip1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <Trans
                  i18nKey="translateWindow.tip2"
                  components={{
                    kbd: (
                      <kbd className="px-1.5 py-0.5 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-xs" />
                    ),
                  }}
                />
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t("translateWindow.tip3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 mt-1">•</span>
                <span>{t("translateWindow.tip4")}</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

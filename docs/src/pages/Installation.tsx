import { Trans, useTranslation } from "react-i18next";
import CodeBlock from "../components/CodeBlock";

export default function Installation() {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold text-theme-text-primary mb-4">
        {t("installation.title")}
      </h1>
      <p className="text-lg text-theme-text-secondary mb-8">
        {t("installation.subtitle")}
      </p>

      <div className="space-y-12">
        {/* Windows */}
        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4 flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0zm9 22c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm9-21h-6.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" />
            </svg>
            {t("installation.windows")}
          </h2>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-theme-text-primary mb-3">
                {t("installation.windowsInstaller")}
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-theme-text-secondary">
                <li>
                  <a
                    href="https://github.com/AhmetOsmn/minimal-translate/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-500 hover:underline"
                  >
                    {t("installation.downloadFrom")}
                  </a>{" "}
                  {t("installation.downloadLink")}{" "}
                  <code className="px-2 py-1 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-sm">
                    Minimal Translate Setup *.exe
                  </code>{" "}
                  {t("installation.downloadFile")}
                </li>
                <li>{t("installation.installStep1")}</li>
                <li>{t("installation.installStep2")}</li>
                <li>{t("installation.installStep3")}</li>
              </ol>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-theme-text-primary mb-3">
                {t("installation.windowsPortable")}
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-theme-text-secondary">
                <li>
                  <a
                    href="https://github.com/AhmetOsmn/minimal-translate/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-500 hover:underline"
                  >
                    {t("installation.downloadFrom")}
                  </a>{" "}
                  {t("installation.downloadLink")}{" "}
                  <code className="px-2 py-1 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-sm">
                    Minimal Translate *.exe
                  </code>{" "}
                  {t("installation.downloadFile")}
                </li>
                <li>{t("installation.portableStep1")}</li>
                <li>{t("installation.portableStep2")}</li>
                <li className="text-theme-text-tertiary">
                  {t("common.note")}: {t("installation.portableNote")}
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* macOS */}
        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4 flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            {t("installation.macos")}
          </h2>

          <div className="card p-6">
            <ol className="list-decimal list-inside space-y-3 text-theme-text-secondary">
              <li>
                <a
                  href="https://github.com/AhmetOsmn/minimal-translate/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-500 hover:underline"
                >
                  {t("installation.downloadFrom")}
                </a>{" "}
                {t("installation.downloadLink")}{" "}
                <code className="px-2 py-1 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-sm">
                  Minimal Translate-*-*.dmg
                </code>{" "}
                {t("installation.downloadFile")}
              </li>
              <li>{t("installation.macStep1")}</li>
              <li>{t("installation.macStep2")}</li>
              <li>{t("installation.macStep3")}</li>
              <li className="text-theme-text-tertiary">
                {t("common.note")}: {t("installation.macSecurityNote")}
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>{t("installation.macSecurity1")}</li>
                  <li>{t("installation.macSecurity2")}</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>

        {/* Linux */}
        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4 flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.19.209-.19.209-.191.209l-.002.002c-.421.432-1.145.858-1.703 1.313-1.123.912-2.358 2.5-2.358 4.571 0 2.655 2.212 4.812 4.937 4.812 2.724 0 4.936-2.157 4.936-4.812 0-2.071-1.233-3.659-2.355-4.571-.559-.455-1.282-.881-1.704-1.313l-.002-.002-.002-.002c-.02-.02-.038-.04-.06-.057-.061-.061-.128-.118-.204-.165a.145.145 0 01-.019-.012c-.213-.239-.402-.571-.663-.839a.424.424 0 00-.11-.135c.122-.805-.01-1.657-.287-2.489-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-1.025-1.928-1.05-3.02-.065-1.491 1.056-5.965-3.17-6.298a4.017 4.017 0 00-.48-.021zm.057 1.524c.12 0 .233.004.345.017 3.524.278 2.527 4.822 2.58 6.129.067 1.187.32 2.111 1.088 3.231.972 1.246 2.221 2.898 2.827 4.725.157.47.231.964.201 1.453.485-.202 1.028-.329 1.529-.329.692 0 1.267.044 1.267.044s.578 2.467-.356 4.691c-.933 2.224-3.133 4.028-3.133 5.424 0 1.811 1.649 3.287 3.688 3.287 2.04 0 3.688-1.476 3.688-3.287 0-1.396-2.2-3.2-3.133-5.424-.934-2.224-.356-4.691-.356-4.691s.575-.044 1.267-.044c.501 0 1.044.127 1.529.329-.03-.489.044-.983.201-1.453.606-1.827 1.855-3.479 2.827-4.725.768-1.12 1.021-2.044 1.088-3.231.053-1.307-.944-5.851 2.58-6.129.112-.013.225-.017.345-.017.89 0 1.673.119 2.309.315.008.082.013.164.013.247 0 .806-.23 1.525-.626 2.15-1.314 2.073-1.85 4.775-2.533 7.328-.31 1.147-.665 2.27-1.246 3.32-.692 1.259-1.615 2.381-2.613 3.379-.218.218-.439.427-.672.627-.045-.42-.143-.837-.3-1.237-.759-1.94-2.4-3.282-4.357-3.282-2.04 0-3.688 1.476-3.688 3.287 0 .888.356 1.689.922 2.306a5.34 5.34 0 01-.672-.627c-.998-.998-1.921-2.12-2.613-3.379-.581-1.05-.936-2.173-1.246-3.32-.683-2.553-1.219-5.255-2.533-7.328-.396-.625-.626-1.344-.626-2.15 0-.083.005-.165.013-.247.636-.196 1.419-.315 2.309-.315z" />
            </svg>
            {t("installation.linux")}
          </h2>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-theme-text-primary mb-3">
                {t("installation.linuxAppImage")}
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-theme-text-secondary">
                <li>
                  <a
                    href="https://github.com/AhmetOsmn/minimal-translate/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-500 hover:underline"
                  >
                    {t("installation.downloadFrom")}
                  </a>{" "}
                  {t("installation.downloadLink")} AppImage{" "}
                  {t("installation.downloadFile")}
                </li>
                <li>{t("installation.linuxAppImageStep1")}</li>
                <CodeBlock>chmod +x Minimal\ Translate-*.AppImage</CodeBlock>
                <li>{t("installation.linuxAppImageStep2")}</li>
                <CodeBlock>./Minimal\ Translate-*.AppImage</CodeBlock>
                <li className="text-theme-text-tertiary">
                  {t("common.note")}: {t("installation.linuxAppImageNote")}
                </li>
              </ol>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-theme-text-primary mb-3">
                {t("installation.linuxDeb")}
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-theme-text-secondary">
                <li>
                  <a
                    href="https://github.com/AhmetOsmn/minimal-translate/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-500 hover:underline"
                  >
                    {t("installation.downloadFrom")}
                  </a>{" "}
                  {t("installation.downloadLink")} DEB{" "}
                  {t("installation.downloadFile")}
                </li>
                <li>{t("installation.linuxDebStep1")}</li>
                <CodeBlock language="bash">
                  sudo dpkg -i minimal-translate_*.deb
                </CodeBlock>
                <li>{t("installation.linuxDebStep2")}</li>
                <CodeBlock language="bash">sudo apt-get install -f</CodeBlock>
                <li>{t("installation.linuxDebStep3")}</li>
              </ol>
            </div>
          </div>
        </section>

        {/* İlk Kurulum Sonrası */}
        <section>
          <h2 className="text-2xl font-bold text-theme-text-primary mb-4">
            {t("installation.afterInstall")}
          </h2>
          <div className="card p-6">
            <ol className="list-decimal list-inside space-y-3 text-theme-text-secondary">
              <li>{t("installation.afterInstallStep1")}</li>
              <li>{t("installation.afterInstallStep2")}</li>
              <li>
                <strong className="text-theme-text-primary">
                  {t("common.apiKeys")}
                </strong>{" "}
                {t("installation.afterInstallStep3")}
              </li>
              <li>
                <strong className="text-theme-text-primary">
                  {t("common.aiModels")}
                </strong>{" "}
                {t("installation.afterInstallStep4")}
              </li>
              <li>
                <Trans
                  i18nKey="installation.afterInstallStep5"
                  components={{
                    strong: <strong className="text-theme-text-primary" />,
                    kbd: (
                      <kbd className="px-2 py-1 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-xs" />
                    ),
                  }}
                  values={{ shortcut: t("installation.shortcutDefault") }}
                />
              </li>
              <li>{t("installation.afterInstallStep6")}</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

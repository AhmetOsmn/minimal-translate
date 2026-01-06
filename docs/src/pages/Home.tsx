import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-theme-text-primary mb-4">
          {t("home.title")}
        </h1>
        <p className="text-lg text-theme-text-secondary">
          {t("home.subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Link
          to="/installation"
          className="card p-6 hover:border-accent-500/50 transition-colors"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-theme-text-primary">
              {t("home.installationCard")}
            </h2>
          </div>
          <p className="text-theme-text-secondary">
            {t("home.installationDesc")}
          </p>
        </Link>

        <Link
          to="/translate-window"
          className="card p-6 hover:border-accent-500/50 transition-colors"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-theme-text-primary">
              {t("home.translateWindowCard")}
            </h2>
          </div>
          <p className="text-theme-text-secondary">
            {t("home.translateWindowDesc")}
          </p>
        </Link>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-theme-text-primary mb-6">
          {t("home.features")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card p-4">
            <h3 className="font-semibold text-theme-text-primary mb-2">
              {t("home.feature1Title")}
            </h3>
            <p className="text-sm text-theme-text-secondary">
              {t("home.feature1Desc")}
            </p>
          </div>
          <div className="card p-4">
            <h3 className="font-semibold text-theme-text-primary mb-2">
              {t("home.feature2Title")}
            </h3>
            <p className="text-sm text-theme-text-secondary">
              {t("home.feature2Desc")}
            </p>
          </div>
          <div className="card p-4">
            <h3 className="font-semibold text-theme-text-primary mb-2">
              {t("home.feature3Title")}
            </h3>
            <p className="text-sm text-theme-text-secondary">
              {t("home.feature3Desc")}
            </p>
          </div>
          <div className="card p-4">
            <h3 className="font-semibold text-theme-text-primary mb-2">
              {t("home.feature4Title")}
            </h3>
            <p className="text-sm text-theme-text-secondary">
              {t("home.feature4Desc")}
            </p>
          </div>
          <div className="card p-4">
            <h3 className="font-semibold text-theme-text-primary mb-2">
              {t("home.feature5Title")}
            </h3>
            <p className="text-sm text-theme-text-secondary">
              {t("home.feature5Desc")}
            </p>
          </div>
          <div className="card p-4">
            <h3 className="font-semibold text-theme-text-primary mb-2">
              {t("home.feature6Title")}
            </h3>
            <p className="text-sm text-theme-text-secondary">
              {t("home.feature6Desc")}
            </p>
          </div>
        </div>
      </div>

      <div className="card p-6 bg-accent-500/10 border-accent-500/20">
        <h2 className="text-xl font-semibold text-theme-text-primary mb-2">
          {t("home.quickStart")}
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-theme-text-secondary">
          <li>
            <Trans
              i18nKey="home.quickStart1"
              values={{ link: t("home.linkText") }}
              components={{
                link: (
                  <Link
                    to="/installation"
                    className="text-accent-500 hover:underline"
                  />
                ),
              }}
            />
          </li>
          <li>
            <Trans
              i18nKey="home.quickStart2"
              values={{ link: t("home.linkTextApiKeys") }}
              components={{
                link: (
                  <Link
                    to="/settings/api-keys"
                    className="text-accent-500 hover:underline"
                  />
                ),
              }}
            />
          </li>
          <li>
            <Trans
              i18nKey="home.quickStart3"
              values={{ shortcut: "Ctrl+Shift+T" }}
              components={{
                kbd: (
                  <kbd className="px-2 py-1 bg-theme-button-secondary-bg border border-theme-border-secondary rounded text-xs" />
                ),
              }}
            />
          </li>
          <li>{t("home.quickStart4")}</li>
        </ol>
      </div>
    </div>
  );
}

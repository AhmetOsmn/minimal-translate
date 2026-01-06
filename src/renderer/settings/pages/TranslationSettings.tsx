import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguagePicker } from "../components/LanguagePicker";
import { SettingCard } from "../components/SettingCard";
import { ToggleSwitch } from "../components/ToggleSwitch";
import { TranslationExample } from "../components/TranslationExample";
import { useLanguages } from "../hooks/useLanguages";

const exampleTranslations: Record<string, string> = {
  en: '"There is a meeting tomorrow. Will you be attending?"',
  tr: '"Yarın bir toplantı var. Katılacak mısın?"',
  de: '"Es gibt morgen ein Meeting. Wirst du teilnehmen?"',
  fr: '"Il y a une réunion demain. Y assisterez-vous?"',
  es: '"Hay una reunión mañana. ¿Asistirás?"',
  it: '"C\'è un incontro domani. Parteciperai?"',
  pt: '"Há uma reunião amanhã. Você vai participar?"',
  ru: '"Завтра будет встреча. Ты будешь присутствовать?"',
  ja: '"明日会議があります。参加しますか？"',
  zh: '"明天有会议。你会参加吗？"',
  ko: '"내일 회의가 있습니다. 참석하시겠습니까?"',
  ar: '"هناك اجتماع غداً. هل ستشارك؟"',
  nl: '"Er is morgen een vergadering. Ga je deelnemen?"',
  pl: '"Jutro jest spotkanie. Będziesz uczestniczyć?"',
  sv: '"Det finns ett möte imorgon. Kommer du att delta?"',
  da: '"Der er et møde i morgen. Vil du deltage?"',
  no: '"Det er et møte i morgen. Vil du delta?"',
  fi: '"Huomenna on kokous. Osallistutko?"',
  cs: '"Zítra je schůzka. Zúčastníš se?"',
  hu: '"Holnap van egy találkozó. Részt veszel?"',
  ro: '"Mâine este o întâlnire. Vei participa?"',
  el: '"Υπάρχει μια συνάντηση αύριο. Θα συμμετάσχεις;"',
  he: '"יש פגישה מחר. האם תתייצב?"',
  hi: '"कल एक बैठक है। क्या आप भाग लेंगे?"',
  th: '"มีการประชุมพรุ่งนี้ คุณจะเข้าร่วมไหม?"',
  vi: '"Có một cuộc họp vào ngày mai. Bạn sẽ tham gia chứ?"',
  id: '"Ada rapat besok. Apakah Anda akan hadir?"',
  uk: '"Завтра є зустріч. Ти будеш присутній?"',
  bg: '"Утре има среща. Ще присъстваш ли?"',
  hr: '"Sutra je sastanak. Hoćeš li sudjelovati?"',
};

export default function TranslationSettings() {
  const { t } = useTranslation();
  const languages = useLanguages();
  const [refineEnglish, setRefineEnglish] = useState(false);
  const [targetLanguage, setTargetLanguage] = useState("en");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    window.settingsAPI?.getConfig().then((config) => {
      if (config?.refineEnglish !== undefined) {
        setRefineEnglish(config.refineEnglish);
      }
      if (config?.targetLanguage !== undefined) {
        setTargetLanguage(config.targetLanguage);
      }
    });
  }, []);

  const selectedLanguage =
    languages.find((lang) => lang.code === targetLanguage) || languages[0];

  const handleLanguageChange = async (languageCode: string) => {
    setTargetLanguage(languageCode);
    setSaveError(null);
    try {
      await window.settingsAPI?.saveConfig({ targetLanguage: languageCode });
    } catch (error) {
      console.error("Failed to save target language:", error);
      setSaveError(t("errors.saveFailed"));
      const config = await window.settingsAPI?.getConfig();
      if (config?.targetLanguage) {
        setTargetLanguage(config.targetLanguage);
      }
    }
  };

  const handleRefineToggle = async () => {
    const newValue = !refineEnglish;
    setRefineEnglish(newValue);
    setSaving(true);
    setSaveError(null);

    try {
      await window.settingsAPI?.saveConfig({ refineEnglish: newValue });
    } catch (error) {
      console.error("Failed to save refine setting:", error);
      setSaveError(t("errors.saveFailed"));
      setRefineEnglish(!newValue);
    } finally {
      setSaving(false);
    }
  };

  const exampleTranslation =
    exampleTranslations[targetLanguage] ||
    t("settings.translation.example.fallback", { language: selectedLanguage.name });

  return (
    <div className="max-w-2xl animate-fade-in">
      <h2 className="text-2xl font-bold text-theme-text-primary mb-2">
        {t("settings.translation.title")}
      </h2>
      <p className="text-theme-text-secondary mb-8">
        {t("settings.translation.subtitle")}
      </p>

      {/* Target Language Setting */}
      <SettingCard
        icon={
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              />
            </svg>
          </div>
        }
        title={t("settings.translation.targetLanguage.title")}
        description={t("settings.translation.targetLanguage.description")}
        error={saveError}
      >
        <LanguagePicker
          languages={languages}
          selectedLanguageCode={targetLanguage}
          onLanguageChange={handleLanguageChange}
        />
      </SettingCard>

      {/* Refine Language Setting */}
      <SettingCard
        icon={
          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
            ✨
          </div>
        }
        title={t("settings.translation.refine.title", {
          language: selectedLanguage.name,
        })}
        description={t("settings.translation.refine.description", {
          language: selectedLanguage.name,
        })}
        error={saveError}
      >
        <ToggleSwitch
          checked={refineEnglish}
          onChange={handleRefineToggle}
          disabled={saving}
          statusLabel={
            refineEnglish ? (
              <>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400">{t("common.active")}</span>
              </>
            ) : (
              <>
                <div className="w-2 h-2 bg-theme-text-muted rounded-full" />
                <span className="text-theme-text-muted">
                  {t("common.inactive")}
                </span>
              </>
            )
          }
        />
      </SettingCard>

      {/* Example */}
      <TranslationExample
        targetLanguageName={selectedLanguage.name}
        exampleTranslation={exampleTranslation}
      />
    </div>
  );
}

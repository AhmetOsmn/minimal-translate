import { useTranslation } from "react-i18next";

interface TranslationExampleProps {
  targetLanguageName: string;
  exampleTranslation: string;
}

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

export function TranslationExample({
  targetLanguageName,
  exampleTranslation,
}: TranslationExampleProps) {
  const { t } = useTranslation();

  return (
    <div className="card p-5 mb-6">
      <h3 className="text-theme-text-primary font-medium mb-3 flex items-center gap-2">
        <svg
          className="w-5 h-5 text-theme-text-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
        {t("common.example")}
      </h3>
      <div className="space-y-3 text-sm">
        <div className="p-3 bg-theme-bg-tertiary/50 rounded-lg">
          <span className="text-theme-text-muted text-xs block mb-1">
            {t("settings.translation.example.input")}:
          </span>
          <span className="text-theme-text-tertiary">
            {t("settings.translation.example.sampleInput")}
          </span>
        </div>
        <div className="flex items-center justify-center">
          <svg
            className="w-4 h-4 text-theme-text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
        <div className="p-3 bg-accent-500/10 border border-accent-500/30 rounded-lg">
          <span className="text-accent-400 text-xs block mb-1">
            {t("settings.translation.example.translation", {
              language: targetLanguageName,
            })}
            :
          </span>
          <span className="text-theme-text-primary">
            {exampleTranslation ||
              `"Çeviri ${targetLanguageName} diline yapılır ve iyileştirilir."`}
          </span>
        </div>
      </div>
    </div>
  );
}


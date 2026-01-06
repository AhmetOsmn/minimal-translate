import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from './locales/en.json'
import trTranslations from './locales/tr.json'

// Get language from window API or default to system language
const getInitialLanguage = (): string => {
  // Try to detect system language as fallback
  const systemLang = navigator.language || navigator.languages?.[0] || 'en'
  const langCode = systemLang.split('-')[0].toLowerCase()
  
  // Support only en and tr for now
  if (langCode === 'tr') return 'tr'
  return 'en'
}

// Initialize with default language, will be updated when store is ready
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      tr: {
        translation: trTranslations,
      },
    },
    lng: getInitialLanguage(), // Default based on system language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  })

// Update language from store when available (async)
if (typeof window !== 'undefined' && (window as any).settingsAPI) {
  (window as any).settingsAPI.getUiLanguage().then((lang: string) => {
    if (lang === 'en' || lang === 'tr') {
      i18n.changeLanguage(lang)
    }
  }).catch((error: any) => {
    console.warn('Failed to get UI language from store:', error)
  })
}

// Function to change language dynamically
export const changeLanguage = async (lang: 'en' | 'tr') => {
  await i18n.changeLanguage(lang)
}

export default i18n


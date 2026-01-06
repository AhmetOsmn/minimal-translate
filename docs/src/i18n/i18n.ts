import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from './locales/en.json'
import trTranslations from './locales/tr.json'

// Get language from localStorage or default to system language
const getInitialLanguage = (): string => {
  // Try to get from localStorage first
  const savedLang = localStorage.getItem('docs-language')
  if (savedLang === 'en' || savedLang === 'tr') {
    return savedLang
  }

  // Try to detect system language as fallback
  const systemLang = navigator.language || navigator.languages?.[0] || 'en'
  const langCode = systemLang.split('-')[0].toLowerCase()
  
  // Support only en and tr
  if (langCode === 'tr') return 'tr'
  return 'en'
}

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
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  })

// Function to change language dynamically
export const changeLanguage = async (lang: 'en' | 'tr') => {
  await i18n.changeLanguage(lang)
  localStorage.setItem('docs-language', lang)
}

export default i18n


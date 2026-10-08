import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector/cjs'

import translationEN from '../locales/en.json'
import translationRU from '../locales/ru.json'

const resources = {
    en: { translation: translationEN },
    ru: { translation: translationRU },
}

i18n.use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ru',
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false,
        },
    })

export default function i18nInit() {}

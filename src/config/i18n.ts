import i18n from 'i18next'; // Importing the i18n instance as a value
import type { i18n as i18nType } from 'i18next'; // Importing the i18n type separately

import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

function setupI18n(): i18nType {
    i18n
        .use(initReactI18next)
        .use(LanguageDetector)
        .use(Backend)
    i18n.init({
        lng: "ru",
        fallbackLng: 'ru'
    });

    return i18n;
}

const i18nInstance = setupI18n();

export default i18nInstance
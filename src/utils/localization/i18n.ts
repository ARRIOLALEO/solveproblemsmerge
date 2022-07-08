import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import type {I18nDict} from './types';

import common_es from 'src/assets/translations/es/common.json';
import common_en from 'src/assets/translations/en/common.json';

export const defaultNS = 'common';
export const resources = {
    en: {
        common: common_en,
    },
    es: {
        common: common_es,
    },
} as const;

void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {escapeValue: false},
        defaultNS: 'common',
        resources,
    });

export const t = (str: I18nDict) => i18n.t(str);

export default i18n;

import {useTranslation} from 'react-i18next';

import {t} from './i18n';
import {I18nDict} from './types';

export const useAppTranslation = () => {
    useTranslation();

    function T(dictItem: I18nDict): string;
    function T(dictItem: I18nDict[]): string[];
    function T(dictItem: I18nDict | I18nDict[]): string | string[] {
        if (Array.isArray(dictItem)) return dictItem.map(str => t(str));
        return t(dictItem);
    }

    return {T};
};

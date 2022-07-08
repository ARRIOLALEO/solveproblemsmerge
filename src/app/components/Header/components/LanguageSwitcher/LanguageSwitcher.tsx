import React from 'react';
import {Select} from 'antd';
import {useTranslation} from 'react-i18next';

import styles from './LanguageSwitcher.module.scss';

const {Option} = Select;

function LanguageSwitcher() {
    const {t, i18n} = useTranslation();
    const defaultLang = i18n.language;

    const handleChange = (lg: string) => {
        void i18n.changeLanguage(lg);
    };

    return (
        <Select
            defaultValue={defaultLang}
            className={styles.languageSwitcherContainer}
            onChange={handleChange}
        >
            <Option
                value="es"
                disabled={defaultLang === 'es'}
            >
                {t('language.spanish')}
            </Option>
            <Option
                value="en"
                disabled={defaultLang === 'en'}
            >
                {t('language.english')}
            </Option>
        </Select>
    );
}

export {LanguageSwitcher};

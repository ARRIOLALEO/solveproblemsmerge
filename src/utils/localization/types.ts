import {Normalize} from 'react-i18next';

import {resources} from './i18n';

type Resources = typeof resources['en']['common'];
export type I18nDict = Exclude<Normalize<Resources>, keyof Resources>;

import {Paths} from 'src/modules/routes/paths';

import {I18nDict} from '../../../../../utils/localization/types';

export interface NavMenuList {
    name: I18nDict
    path: Paths
}

export const navMenuList: NavMenuList[] = [
    {
        name: 'header.agencies',
        path: Paths.AGENCIES,
    },
    {
        name: 'header.jobs',
        path: Paths.JOBS,
    },
    {
        name: 'header.candidates',
        path: Paths.CANDIDATES,
    },
];

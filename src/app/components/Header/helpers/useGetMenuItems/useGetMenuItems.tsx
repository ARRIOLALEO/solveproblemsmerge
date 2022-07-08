import React, {useMemo} from 'react';
import type {MenuProps} from 'antd';
import {NavLink} from 'react-router-dom';
import {useAppTranslation} from 'src/utils/localization/useAppTranslation';

import {NavMenuList} from '../navMenuList/navMenuList';

function useGetMenuItems(menuList: NavMenuList[]): MenuProps['items'] {
    const {T} = useAppTranslation();

    return useMemo(() => (
        menuList.map(({path, name}) => ({
            key: path,
            label: <NavLink to={path}>{T(name)}</NavLink>,
        }))
    ), [T, menuList]);
}

export {useGetMenuItems};

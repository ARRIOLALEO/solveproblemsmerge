import React from 'react';
import {
    Layout,
    Menu,
    Typography,
} from 'antd';
import {useAppTranslation} from 'src/utils/localization/useAppTranslation';

import {useGetMenuItems} from './helpers';
import {UserDropdownMenu, LanguageSwitcher} from './components';
import {navMenuList} from './helpers/navMenuList/navMenuList';

import styles from './Header.module.scss';

const {Header: AntDHeader} = Layout;
const {Title} = Typography;

function Header() {
    const {T} = useAppTranslation();
    const items = useGetMenuItems(navMenuList);

    return (
        <AntDHeader className={styles.headerContainer}>
            <Title className={styles.logo}>{T('header.title')}</Title>
            <Menu
                className={styles.menu}
                theme="dark"
                mode="horizontal"
                items={items}
            />
            <LanguageSwitcher />
            <UserDropdownMenu />
        </AntDHeader>
    );
}

export {Header};

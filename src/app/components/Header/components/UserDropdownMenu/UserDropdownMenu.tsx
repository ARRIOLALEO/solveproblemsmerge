import React, {useMemo} from 'react';
import {Dropdown, Menu} from 'antd';
import {logout} from 'src/modules/reducers/sessionReducer/sessionThunks';
import {useAppDispatch} from 'src/modules/store/store';
import {useTranslation} from 'react-i18next';
import {useIsAuthorized} from 'src/utils/hooks/useIsAuth';

import {UserOutlined} from '@ant-design/icons';

import styles from './UserDropdownMenu.module.scss';

function UserDropdownMenu() {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const isAuth = useIsAuthorized();

    const items = useMemo(() => {
        const handleLogout = () => {
            dispatch(logout());
        };

        return (
            <Menu items={[{
                key: '1',
                label: <span onClick={handleLogout}>{t('header.dropdown.logout')}</span>,
            }]}
            />
        );
    }, [t, dispatch]);

    return (
        isAuth
            ? (
                <Dropdown overlay={items}>
                    <UserOutlined className={styles.userDropdownMenuContainer} />
                </Dropdown>
            ) : <UserOutlined className={styles.userDropdownMenuContainer} />
    );
}

export {UserDropdownMenu};

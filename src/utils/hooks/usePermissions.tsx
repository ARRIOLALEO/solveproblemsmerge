import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPermissions as getPermissionsFromAPI} from 'src/modules/reducers/sessionReducer/sessionThunks';
import {getPermissions} from 'src/modules/selectors/sessionSelectors';

export const usePermissions = (isAuth: boolean) => {
    const permissions = useSelector(getPermissions);
    const dispatch = useDispatch();
    useEffect(() => {
        if (isAuth && permissions.length === 0) {
            void dispatch<any>(getPermissionsFromAPI());
        }
    }, [dispatch, isAuth, permissions.length]);
};

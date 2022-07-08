import {useSelector, useDispatch} from 'react-redux';
import {setAccessToken, setRefreshToken} from 'src/modules/reducers/sessionReducer/sessionSlice';
import {getAccessToken} from 'src/modules/selectors/sessionSelectors';

import {getAccessTokenFromLocalStorage, getRefreshTokenFromLocalStorage} from '../localStorageService';

export const useIsAuthorized = () => {
    const dispatch = useDispatch();
    const accessTokenFromState = useSelector(getAccessToken);

    const syncTokensWithLocalStorage = (accessToken: string) => {
        if (!accessTokenFromState && accessToken) {
            dispatch(setAccessToken(accessToken));
            dispatch(setRefreshToken(getRefreshTokenFromLocalStorage()));
        }
    };

    const accessToken = accessTokenFromState || getAccessTokenFromLocalStorage();
    syncTokensWithLocalStorage(accessToken);

    return Boolean(accessToken);
};

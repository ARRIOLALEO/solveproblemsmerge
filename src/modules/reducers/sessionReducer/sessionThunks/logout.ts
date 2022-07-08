import {AppThunk} from 'src/modules/store';
import {removeTokensFromLocalStorage} from 'src/utils/localStorageService';

import {removeAccessToken, removeRefreshToken} from '../sessionSlice';

export const logout = (): AppThunk => (
    dispatch => {
        dispatch(removeAccessToken());
        dispatch(removeRefreshToken());
        removeTokensFromLocalStorage();
    }
);

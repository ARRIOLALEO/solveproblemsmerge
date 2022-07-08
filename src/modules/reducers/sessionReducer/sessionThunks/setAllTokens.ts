import {AuthTokens} from 'src/api/apiTypes';
import {AppThunk} from 'src/modules/store';
import {saveTokensInLocalStorage} from 'src/utils/localStorageService';

import {setAccessToken, setRefreshToken} from '../sessionSlice';

export const setAllTokens = (tokens: AuthTokens | undefined): AppThunk => (
    dispatch => {
        if (tokens) {
            dispatch(setAccessToken(tokens.access_token));
            dispatch(setRefreshToken(tokens.refresh_token));
            saveTokensInLocalStorage(tokens);
        }
    }
);

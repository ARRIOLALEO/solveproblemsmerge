import {API} from 'src/api';
import {AppThunk} from 'src/modules/store';

import {setAllTokens} from './setAllTokens';

export const login = (username: string, password: string): AppThunk => (
    async dispatch => {
        const response = await API.login(username, password);

        dispatch(setAllTokens(response));
    }
);

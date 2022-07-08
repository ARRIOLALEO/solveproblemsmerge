import {errorNotification} from 'src/utils';

import {APIInstance} from '../apiInstance';
import {AuthTokens} from '../apiTypes';

import {RequestUrl} from './requestUrlList';

export const login = async (username: string, password: string) => {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    try {
        const {data} = await APIInstance.post<AuthTokens>(RequestUrl.LOGIN, params, config);

        return data;
    } catch (error) {
        console.error(new Error((error as Error).message));
        errorNotification(new Error((error as Error).message), 'Login Error');
        return undefined;
    }
};

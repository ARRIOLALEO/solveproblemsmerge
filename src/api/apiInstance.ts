import axios, {AxiosError} from 'axios';
import type {AxiosRequestConfig} from 'axios';
import {ReduxStore} from 'src/modules/store';
import {logout, setAllTokens} from 'src/modules/reducers/sessionReducer/sessionThunks';
import {errorNotification} from 'src/utils';

import {AuthTokens, ErrorConfig} from './apiTypes';
import {RequestUrl} from './requests/requestUrlList';

export const APIInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const refreshTokens = async (refreshToken: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${refreshToken}`,
        },
    };

    try {
        const {data} = await APIInstance.get<AuthTokens>(RequestUrl.REFRESH_TOKENS, config);

        return data;
    } catch (error) {
        console.error(new Error((error as Error).message));
        errorNotification(new Error((error as Error).message), 'Authorization Error');
        return undefined;
    }
};

export const requestInterceptor = (currentStore: ReduxStore) => {
    const handleRequest = (config: AxiosRequestConfig) => {
        if (config.url === RequestUrl.REFRESH_TOKENS) return config;

        const {accessToken} = currentStore.getState().sessionReducer;

        if (accessToken) {
            const newConfig = {
                ...config,
                headers: {
                    ...config.headers,
                    Authorization: `Bearer ${accessToken}`,
                },
            };

            return newConfig;
        }
        return config;
    };

    APIInstance.interceptors.request.use(handleRequest);
};

export const responseInterceptor = (currentStore: ReduxStore) => {
    const {dispatch, getState} = currentStore;

    const handleResponse = (config: AxiosRequestConfig) => config;

    const handleUnauthorizedResponse = async (error: AxiosError) => {
        const originConfig: ErrorConfig = error.config;
        const isNotLoginRequest = originConfig.url !== RequestUrl.LOGIN;
        const isNotRefreshTokensRequest = originConfig.url !== RequestUrl.REFRESH_TOKENS;
        const unAuthorized = error.response?.status === 403;

        if (
            isNotLoginRequest
            && isNotRefreshTokensRequest
            && error.response
        ) {
            if (
                unAuthorized
                && !originConfig.retry
            ) {
                originConfig.retry = true;
                const {refreshToken} = getState().sessionReducer;

                const response = await refreshTokens(refreshToken);

                if (!response) {
                    dispatch(logout());
                    return Promise.reject();
                }

                dispatch(setAllTokens(response));
                return APIInstance(originConfig);
            }
        } return Promise.reject(error);
    };

    APIInstance.interceptors.response.use(handleResponse, handleUnauthorizedResponse);
};

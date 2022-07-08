import type {AuthTokens} from 'src/api/apiTypes';

enum LSItemNames {
    ACCESS_TOKEN = 'access_token',
    REFRESH_TOKEN = 'refresh_token',
}

const getAccessTokenFromLocalStorage = () => (
    localStorage.getItem(LSItemNames.ACCESS_TOKEN) || ''
);

const getRefreshTokenFromLocalStorage = () => (
    localStorage.getItem(LSItemNames.REFRESH_TOKEN) || ''
);

const saveAccessTokenInLocalStorage = (accessToken: string) => (
    localStorage.setItem(LSItemNames.ACCESS_TOKEN, accessToken)
);

const saveRefreshTokenInLocalStorage = (refreshToken: string) => (
    localStorage.setItem(LSItemNames.REFRESH_TOKEN, refreshToken)
);

const removeAccessTokenFromLocalStorage = () => {
    localStorage.removeItem(LSItemNames.ACCESS_TOKEN);
};

const removeRefreshTokenFromLocalStorage = () => {
    localStorage.removeItem(LSItemNames.REFRESH_TOKEN);
};

const saveTokensInLocalStorage = ({access_token, refresh_token}: AuthTokens) => {
    saveAccessTokenInLocalStorage(access_token);
    saveRefreshTokenInLocalStorage(refresh_token);
};

const removeTokensFromLocalStorage = () => {
    removeAccessTokenFromLocalStorage();
    removeRefreshTokenFromLocalStorage();
};

export {
    getAccessTokenFromLocalStorage,
    getRefreshTokenFromLocalStorage,
    saveTokensInLocalStorage,
    removeTokensFromLocalStorage,
};

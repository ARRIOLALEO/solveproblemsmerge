import {RootState} from 'src/modules/store/rootReducer';

export const getAccessToken = (state: RootState) => state.sessionReducer.accessToken;
export const getRefreshToken = (state: RootState) => state.sessionReducer.refreshToken;
export const getPermissions = (state: RootState) => state.sessionReducer.permissions;

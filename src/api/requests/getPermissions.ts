import {errorNotification} from 'src/utils';

import {APIInstance} from '../apiInstance';

import {RequestUrl} from './requestUrlList';

export const getPermissions = async () => {
    try {
        const response = await APIInstance.get<string[]>(RequestUrl.GET_PERMISSIONS);
        return response.data;
    } catch (error) {
        console.error(error);
        errorNotification(new Error((error as Error).message), 'Get permissions Error');
        return undefined;
    }
};

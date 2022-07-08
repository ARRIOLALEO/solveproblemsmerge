import {
    errorNotification,
    successNotification,
} from 'src/utils';

import type {RecruiterRequestData} from '../apiTypes';
import {APIInstance} from '../apiInstance';

import {RequestUrl} from './requestUrlList';

export const addRecruiter = async (recruiterData: RecruiterRequestData) => {
    try {
        const data = await APIInstance.post<RecruiterRequestData>(RequestUrl.ADD_RECRUITER, recruiterData);
        successNotification('Recruiter added');
        return data;
    } catch (error) {
        console.error(new Error((error as Error).message));
        errorNotification(new Error((error as Error).message), 'Error adding recruiter');
        return undefined;
    }
};

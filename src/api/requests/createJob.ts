import {
    errorNotification,
    successNotification,
} from 'src/utils';

import {JobRequestData} from '../apiTypes';
import {APIInstance} from '../apiInstance';

import {RequestUrl} from './requestUrlList';

export const createJob = async (jobData: JobRequestData) => {
    try {
        await APIInstance.post<JobRequestData>(RequestUrl.CREATE_JOB, jobData);
        successNotification('Job Created');
    } catch (error) {
        console.error(new Error((error as Error).message));
        errorNotification(new Error((error as Error).message), 'Create job Error');
    }
    return undefined;
};

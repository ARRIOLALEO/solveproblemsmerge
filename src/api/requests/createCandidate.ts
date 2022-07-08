import {
    errorNotification,
    successNotification,
} from 'src/utils';

import {CandidateFormData} from '../apiTypes';
import {APIInstance} from '../apiInstance';

import {RequestUrl} from './requestUrlList';

export const createCandidate = async (candidateData:CandidateFormData) => {
    try {
        await APIInstance.post<CandidateFormData>(RequestUrl.CREATE_CANDIDATE, candidateData);
        successNotification('Candidate Create');
    } catch (error) {
        console.log(new Error((error as Error).message));
        errorNotification(new Error((error as Error).message), 'Create Candidate Error');
    }
    return undefined;
};

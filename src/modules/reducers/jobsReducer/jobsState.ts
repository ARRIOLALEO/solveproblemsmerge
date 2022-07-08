import {createSampleJobs} from 'src/app/pages/JobsPage/helpers';
import type {Job} from 'src/app/pages/JobsPage/types';

export interface State {
    jobDisplay: Job | null
    pagination: {
        total: number | undefined,
        currentPage: number | undefined
    },
    jobsList: Job[]
}

export const initialState: State = {
    jobDisplay: null,
    pagination: {
        total: 10,
        currentPage: 1,
    },
    jobsList: createSampleJobs(10),
};

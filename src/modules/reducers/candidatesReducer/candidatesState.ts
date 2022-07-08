import {createSampleCandidates} from 'src/app/pages/CandidatesPage/helpers';
import type {Candidate} from 'src/app/pages/CandidatesPage/types';

export interface State {
    candidateDisplay: Candidate | null
    pagination: {
        total: number
        currentPage: number
    },
    candidatesList: Candidate[]
}

export const initialState: State = {
    candidateDisplay: null,
    pagination: {
        total: 20,
        currentPage: 1,
    },
    candidatesList: createSampleCandidates(20),
};

import {RootState} from 'src/modules/store/rootReducer';

const getCandidateDisplay = (state: RootState) => state.candidatesReducer.candidateDisplay;
const getCurrentPage = (state: RootState) => state.candidatesReducer.pagination.currentPage;
const getTotal = (state: RootState) => state.candidatesReducer.pagination.total;
const getCandidatesList = (state: RootState) => state.candidatesReducer.candidatesList;

export {
    getCandidateDisplay,
    getCurrentPage,
    getTotal,
    getCandidatesList,
};

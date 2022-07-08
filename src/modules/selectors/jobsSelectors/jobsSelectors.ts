import {RootState} from 'src/modules/store/rootReducer';

const getJobDisplay = (state: RootState) => state.jobsReducer.jobDisplay;
const getCurrentPage = (state: RootState) => state.jobsReducer.pagination.currentPage;
const getTotal = (state: RootState) => state.jobsReducer.pagination.total;
const getJobsList = (state: RootState) => state.jobsReducer.jobsList;

export {
    getJobDisplay,
    getCurrentPage,
    getTotal,
    getJobsList,
};

import {combineReducers} from '@reduxjs/toolkit';

import {
    sessionReducer,
    jobsReducer,
    candidatesReducer,
} from '../reducers';

const rootReducer = combineReducers({
    sessionReducer,
    jobsReducer,
    candidatesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

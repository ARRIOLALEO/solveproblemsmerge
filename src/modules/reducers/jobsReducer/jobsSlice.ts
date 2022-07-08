/* eslint-disable no-param-reassign */
import type {Job} from 'src/app/pages/JobsPage/types';

import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {initialState} from './jobsState';

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setJobDisplay(state, action: PayloadAction<Job | null>) {
            state.jobDisplay = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number | undefined>) {
            state.pagination.currentPage = action.payload;
        },
    },
});

export const jobsReducer = jobsSlice.reducer;

export const {
    setJobDisplay,
    setCurrentPage,
} = jobsSlice.actions;

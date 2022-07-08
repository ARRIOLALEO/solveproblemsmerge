/* eslint-disable no-param-reassign */
import type {Candidate} from 'src/app/pages/CandidatesPage/types';

import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {initialState} from './candidatesState';

const candidatesSlice = createSlice({
    name: 'candidates',
    initialState,
    reducers: {
        setCandidateDisplay(state, action: PayloadAction<Candidate | null>) {
            state.candidateDisplay = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.pagination.currentPage = action.payload;
        },
    },
});

export const candidatesReducer = candidatesSlice.reducer;

export const {
    setCandidateDisplay,
    setCurrentPage,
} = candidatesSlice.actions;

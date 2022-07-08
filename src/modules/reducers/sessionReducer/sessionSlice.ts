/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {initialState} from './sessionState';

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setAccessToken(state, action: PayloadAction<string>) {
            state.accessToken = action.payload;
        },
        setRefreshToken(state, action: PayloadAction<string>) {
            state.refreshToken = action.payload;
        },
        removeAccessToken(state) {
            state.accessToken = '';
        },
        removeRefreshToken(state) {
            state.refreshToken = '';
        },
        setPermissions(state, action: PayloadAction<string[]>) {
            state.permissions = action.payload;
        },
    },
});

export const sessionReducer = sessionSlice.reducer;

export const {
    setAccessToken,
    setRefreshToken,
    removeAccessToken,
    removeRefreshToken,
    setPermissions,
} = sessionSlice.actions;

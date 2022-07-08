import {useDispatch} from 'react-redux';
import type {ThunkAction} from 'redux-thunk';
import {
    requestInterceptor,
    responseInterceptor,
} from 'src/api/apiInstance';

import {configureStore} from '@reduxjs/toolkit';
import type {Action} from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import type {RootState} from './rootReducer';

export const store = configureStore({
    reducer: rootReducer,
});

requestInterceptor(store);
responseInterceptor(store);

export type ReduxStore = typeof store;

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const useAppDispatch: () => AppDispatch = useDispatch;

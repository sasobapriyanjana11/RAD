import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/CountReducer';

export const Store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

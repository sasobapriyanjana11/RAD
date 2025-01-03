import { createStore } from 'redux';
import { CountReducer } from "../reducers/CountReducer.tsx";

// Create the store
export const Store = createStore(CountReducer);

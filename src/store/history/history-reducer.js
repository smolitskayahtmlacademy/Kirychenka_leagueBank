import { createReducer } from '@reduxjs/toolkit';
import { clearHistory, addHistory } from '../action';
import { HISTORY_LENGTH } from '../../constant.js';

const initialState = {
  history: [],
};

export const historyReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(clearHistory, ((state) => {
      state.history = [];
    }))
    .addCase(addHistory, ((state, action) => {
      state.history = state.history.length === HISTORY_LENGTH ?
        [...state.history.slice(1), action.payload] :
        [...state.history, action.payload];
    }));
});

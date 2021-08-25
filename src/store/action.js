import { ActionType } from '../constant.js';
import { createAction } from '@reduxjs/toolkit';

export const clearHistory = createAction(ActionType.CLEAR_HISTORY);

export const addHistory = createAction(ActionType.ADD_HISTORY, (historyItem) => ({
  payload: historyItem,
}));


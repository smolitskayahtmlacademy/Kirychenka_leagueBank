import { combineReducers } from 'redux';
import { NameSpace } from '../constant.js';
import { historyReducer } from './history/history-reducer.js';

export const rootReducer = combineReducers({
  [NameSpace.HISTORY]: historyReducer,
});

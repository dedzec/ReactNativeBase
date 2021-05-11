import { combineReducers } from 'redux';
import settings from './settings';

export const Reducers = combineReducers({
  ...settings,
});

import { combineReducers } from 'redux';
import {
  autocompleteOptions,
  albumResults
} from './Controls-reducer';

export default combineReducers({
  autocompleteOptions,
  albumResults,
});

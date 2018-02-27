import { combineReducers } from 'redux';
import {
  autocompleteOptions,
  albumResults
} from './Controls-reducer';
import { selectedRelease } from './ReleaseList-reducer';

export default combineReducers({
  autocompleteOptions,
  albumResults,
  selectedRelease,
});

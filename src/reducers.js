import { combineReducers } from 'redux';
import {
  autocompleteOptions,
  albumResults,
  searchTerm,
} from './Controls-reducer';
import {
  selectedRelease,
  albumDetails,
} from './ReleaseList-reducer';

export default combineReducers({
  autocompleteOptions,
  albumResults,
  searchTerm,
  selectedRelease,
  albumDetails,
});

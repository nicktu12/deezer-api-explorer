import { combineReducers } from 'redux';
import {
  autocompleteOptions,
  albumResults,
  searchTerm,
} from '../Controls/Controls-reducer';
import {
  selectedRelease,
  albumDetails,
} from '../ReleaseList/ReleaseList-reducer';

export default combineReducers({
  autocompleteOptions,
  albumResults,
  searchTerm,
  selectedRelease,
  albumDetails,
});

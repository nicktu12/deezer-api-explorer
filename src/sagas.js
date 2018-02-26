import { call, put, takeLatest } from 'redux-saga/effects';
import { retrieveSearchResults } from './utilities.js';

function* searchInputValue(action) {
  try {
    const autocompleteResults = yield call(retrieveSearchResults, action.inputValue);
    yield put({type: 'AUTOCOMPLETE_RESULTS', autocompleteResults});
  } catch (error) {
    yield put({type: 'AUTOCOMPLETE_ERROR', message: error.message});
  }
};

function* listenForInputValue() {
  yield takeLatest('INPUT_VALUE', searchInputValue)
};

export default [
  listenForInputValue,
];

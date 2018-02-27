import { call, put, takeLatest } from 'redux-saga/effects';
import { retrieveSearchResults, retrieveAlbums, retrieveReleaseDetails } from './utilities';

function* searchInputValue(action) {
  try {
    const autocompleteResults = yield call(retrieveSearchResults, action.inputValue);
    yield put({ type: 'AUTOCOMPLETE_RESULTS', autocompleteResults });
  } catch (error) {
    yield put({ type: 'AUTOCOMPLETE_ERROR', message: error.message });
  }
}

function* searchInputId(action) {
  try {
    const albums = yield call(retrieveAlbums, action.artistId);
    yield put({ type: 'ALBUM_RESULTS', albums });
  } catch (error) {
    yield put({ type: 'ALBUM_RETRIEVAL_ERROR', message: error.message });
  }
}

function* selectRelease(action) {
  try {
    const releaseDetails = yield call(retrieveReleaseDetails, action.link)
    yield put({ type: 'ALBUM_DETAILS', releaseDetails });
  } catch (error) {
    yield put({ type: 'SELECT_RELEASE_ERROR', message: error.message });
  }
}

function* listenForInputValue() {
  yield takeLatest('INPUT_VALUE', searchInputValue);
}

function* listenForArtistId() {
  yield takeLatest('ARTIST_ID', searchInputId);
}

function* listenForSelectRelease() {
  yield takeLatest('SELECT_RELEASE', selectRelease);
}

export default [
  listenForInputValue,
  listenForArtistId,
  listenForSelectRelease,
];

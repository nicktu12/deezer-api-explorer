export function autocompleteOptions(state = [], action) {
  switch (action.type) {
    case 'AUTOCOMPLETE_RESULTS':
      return action.autocompleteResults;
    default:
      return state;
  }
}

export function albumResults(state = [], action) {
  switch (action.type) {
    case 'ALBUM_RESULTS':
      return action.albums;
    default:
      return state;
  }
}

export function searchTerm(state = '', action) {
  switch (action.type) {
    case 'INPUT_VALUE':
      return action.inputValue;
    default:
      return state;
  }
}

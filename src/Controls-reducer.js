function autocompleteOptions(state = [], action) {
  switch (action.type) {
    case 'AUTOCOMPLETE_RESULTS':
      return action.autocompleteResults;
    default:
      return state;
  }
}

export { autocompleteOptions as default };

import { 
    autocompleteOptions,
    albumResults,
    searchTerm,
 } from './Controls-reducer';

describe('Controls reducers', () => {

  it('should return default state for autocompleteOptions reducer', () => {
    expect(autocompleteOptions(undefined, {})).toEqual([])
  })

  it('should return autocompleteOptions results when passed an action', () => {
    const mockAutocompleteResults = [
        'Beyoncé',
        'Above & Beyond',
        'Beyond Creation',
    ];
    const action = {type: 'AUTOCOMPLETE_RESULTS', autocompleteResults: mockAutocompleteResults};

    expect(autocompleteOptions(undefined, action)).toEqual(mockAutocompleteResults);
  });

  it('should return default state for albumResults reducer', () => {
    expect(albumResults(undefined, {})).toEqual([])
  })

  it('should return autocompleteOptions results when passed an action', () => {
    const mockAlbumResults = [
        {title: 'Abbey Road'},
        {title: 'Rubber Soul'},
        {title: 'The White Album'},
    ];
    const action = {type: 'ALBUM_RESULTS', albums: mockAlbumResults};

    expect(albumResults(undefined, action)).toEqual(mockAlbumResults);
  });

  it('should return default state for searchTerm reducer', () => {
    expect(searchTerm(undefined, {})).toEqual('')
  })

  it('should return a search term when passed an action', () => {
    const action = {type: 'INPUT_VALUE', inputValue: 'The Beatles'};

    expect(searchTerm(undefined, action)).toEqual('The Beatles');
  });

})

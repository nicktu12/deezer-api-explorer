export const searchInputValue = inputValue => (
  {
    type: 'INPUT_VALUE',
    inputValue,
  }
);

export const searchSubmit = artistId => (
  {
    type: 'ARTIST_ID',
    artistId,
  }
);

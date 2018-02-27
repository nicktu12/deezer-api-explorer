const autocompleteCleaner = (response, numOfResults) => {
  const topMatches = response.data.splice(0, numOfResults);
  return topMatches.map(artist => ({
    id: artist.id,
    name: artist.name
  }));
};

export const retrieveSearchResults = (inputValue) => (
  fetch(`https://cors-anywhere.herokuapp.com/` + `https://api.deezer.com/search/artist?q=${inputValue}`, {
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => autocompleteCleaner(response, 3))
    .catch(error => alert(error))
);

export const retrieveAlbums = (artistId) => {
  fetch(`https://cors-anywhere.herokuapp.com/` + `https://api.deezer.com/artist/${artistId}/albums`, {
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => alert(error))
};

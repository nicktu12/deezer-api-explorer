const autocompleteCleaner = (response, numOfResults) => {
  const topMatches = response.data.splice(0, numOfResults);
  return topMatches.map(artist => artist.name)
};

export const retrieveSearchResults = (inputValue) => {
  return fetch(`https://cors-anywhere.herokuapp.com/` + `https://api.deezer.com/search/artist?q=${inputValue}`, {
    headers: {
      'Content-type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(response => autocompleteCleaner(response, 3))
    .catch(error => alert(error))
}

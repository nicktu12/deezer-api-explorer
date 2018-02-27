const autocompleteCleaner = (response, numOfResults) => {
  const topMatches = response.data.splice(0, numOfResults);
  return topMatches.map(artist => ({
    id: artist.id,
    name: artist.name
  }));
};

const albumsResponseCleaner = (response) => {
  return response.data.map(album => ({
    albumImage: album.cover_medium,
    albumId: album.id,
    albumTitle: album.title,
  }));
};

const trackDurationCleaner = (duration) => (
  (duration-(duration%=60))/60+(9<duration?':':':0')+duration
);

const albumTracksCleaner = (tracksArray) => (
  tracksArray.data.map(track => ({
    trackTitle: track.title,
    trackArtist: track.artist.name,
    trackDuration: trackDurationCleaner(track.duration),
  }))
);

const albumReleaseCleaner = releaseDate => (
  releaseDate.split('-')[0]
);

const albumDetailsCleaner = (response) => {
  return {
    albumTitle: response.title,
    albumCover: response.cover_medium,
    albumTracks: albumTracksCleaner(response.tracks),
    albumRelease: albumReleaseCleaner(response.release_date)
  }
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

export const retrieveAlbums = (artistId) => (
  fetch(`https://cors-anywhere.herokuapp.com/` + `https://api.deezer.com/artist/${artistId}/albums`, {
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => albumsResponseCleaner(response))
    .catch(error => alert(error))
);

export const retrieveReleaseDetails = id => (
  fetch(`https://cors-anywhere.herokuapp.com/` + `https://api.deezer.com/album/${id}`, {
    headers: {
      'Content-type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(response => albumDetailsCleaner(response))
    .catch(error => alert(error))
);

import { 
    selectedRelease,
    albumDetails,
 } from './ReleaseList-reducer';

describe('ReleaseList reducers', () => {

  it('should return default state for selectedRelease reducer', () => {
    expect(selectedRelease(undefined, {})).toEqual('')
  })

  it('should return a selectedRelease id when passed an action', () => {
    const action = {type: 'SELECT_RELEASE', link: 1212};

    expect(selectedRelease(undefined, action)).toEqual(1212);
  });

  it('should return default state for albumDetails reducer', () => {
    expect(albumDetails(undefined, {})).toEqual({})
  })

  it('should return albumDetails when passed an action', () => {
    const mockAlbumDetails = {
        title: 'Abbey Road',
        artist: 'The Beatles',
        tracks: [
            {title: 'Come Together'},
            {title: 'Octopus\'s Garden'}
        ],
    };
    const action = {type: 'ALBUM_DETAILS', releaseDetails: mockAlbumDetails};

    expect(albumDetails(undefined, action)).toEqual(mockAlbumDetails);
  });

})

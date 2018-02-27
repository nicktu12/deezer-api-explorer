export function selectedRelease(state = '', action) {
  switch (action.type) {
    case 'SELECT_RELEASE':
      return action.link;
    default:
      return state;
  }
}

export function albumDetails(state = {}, action) {
  switch (action.type) {
    case 'ALBUM_DETAILS':
      return action.releaseDetails;
    default:
      return state;
  }
}

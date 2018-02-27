export function selectedRelease(state = '', action) {
  switch (action.type) {
    case 'SELECT_RELEASE':
      return action.link;
    default:
      return state;
  }
}

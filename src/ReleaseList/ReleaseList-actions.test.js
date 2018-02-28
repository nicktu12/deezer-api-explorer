import * as actions from './ReleaseList-actions';

describe('ReleaseList actions', () => {

  it('should create an action to add a selected release', () => {
    const id = "1212"
    const expectedAction = {
      type: 'SELECT_RELEASE',
      link: "1212",
    }
    expect(actions.selectRelease(id)).toEqual(expectedAction)
  })
  
})
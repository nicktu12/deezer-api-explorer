import * as actions from './Controls-actions';

describe('Controls actions', () => {

  it('should create an action to add a search input', () => {
    const text = "Beyoncé"
    const expectedAction = {
      type: 'INPUT_VALUE',
      inputValue: "Beyoncé",
    }
    expect(actions.searchInputValue(text)).toEqual(expectedAction)
  })

  it('should create an action to add an artist id', () => {
      const id = "1212"
      const expectedAction = {
        type: 'ARTIST_ID',
        artistId: "1212",
      }
      expect(actions.searchSubmit(id)).toEqual(expectedAction)
    })
    
})
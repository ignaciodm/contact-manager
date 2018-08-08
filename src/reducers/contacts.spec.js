import contacts from './contacts'
import * as types from '../constants/ActionTypes'

const contact = {
  firstName : 'Test',
  lastName : 'User',
  tel: '123-456-789',
  email: 'test.user@example.com'
}


describe('contacts reducer', () => {

  it('should handle initial state', () => {
    expect(contacts(undefined, {})).toHaveLength(6)
  })

  it('should ADD_CONTACT to empty state', () => {
    expect(
      contacts([], {
        type: types.ADD_CONTACT,
        contact: contact
      })
    ).toEqual([{...contact, id: 0, avatarUrl: '0.jpg'}])
  })
})

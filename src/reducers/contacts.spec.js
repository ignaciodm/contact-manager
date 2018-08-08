import contacts from './contacts'
import * as types from '../constants/ActionTypes'

// TODO
// check jest mocks to see if can get rid of these initialization

const incompleteContact = {
  firstName : 'Test',
  lastName : 'User',
  tel: '123-456-789',
  email: 'test.user@example.com'
}

const fullContact = {
  ...incompleteContact,
  id: 0,
  avatarUrl: '0.jpg'
}

const otherContact = {
  firstName : 'Other Test',
  lastName : 'Other User',
  tel: '123-456-789',
  email: 'other.test.user@example.com'
}

const otherFullContact = {
  ...otherContact,
  id: 1,
  avatarUrl: '1.jpg'
}

const NON_EXISTENT_ID = 99999;

describe('contacts reducer', () => {

  describe('initial state', () => {
    it('should handle initial state', () => {
      expect(contacts(undefined, {})).toHaveLength(6)
    })
  })

  describe('ADD_CONTACT', () => {
    it('should add contact to empty state', () => {
      expect(
        contacts([], {
          type: types.ADD_CONTACT,
          contact: incompleteContact
        })
      ).toEqual([
        fullContact
      ])
    })

    it('should add contact to existing state', () => {
      expect(
        contacts([fullContact], {
          type: types.ADD_CONTACT,
          contact: otherContact
        })
      ).toEqual([
        fullContact,
        otherFullContact
      ])
    })
  })

  describe('DELETE_CONTACT', () => {
    it('should delete contact when contact id matches', () => {
      expect(
        contacts([
          fullContact
        ], {
          type: types.DELETE_CONTACT,
          contact: fullContact
        })
      ).toEqual([])
    })

    it('should not delete contact when contact id does not match', () => {
      expect(
        contacts([
          fullContact
        ], {
          type: types.DELETE_CONTACT,
          contact: {id: NON_EXISTENT_ID}
        })
      ).toEqual([fullContact])
    })
  })

  describe('EDIT_CONTACT', () => {
    const updateProps = {
      firstName: 'new Name',
      lastName: 'new last name',
      tel: '2222222',
      email: 'new.email@test.com'
    }

    it('should udpate contacts when id matchs', () => {
      expect(
        contacts([
          fullContact,
          otherFullContact
        ], {
          type: types.EDIT_CONTACT,
          contact: {...otherFullContact, ...updateProps }
        })
      ).toEqual([
        fullContact,
        {...otherFullContact, ...updateProps }
      ])
    })

    it('should not udpate contacts when id does not matchs', () => {
      expect(
        contacts([
          fullContact,
          otherFullContact
        ], {
          type: types.EDIT_CONTACT,
          contact: {...otherFullContact, ...updateProps, id: NON_EXISTENT_ID }
        })
      ).toEqual([
        fullContact,
        otherFullContact
      ])
    })
  })
})

import view from './view'
import * as types from '../constants/ActionTypes'

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

const initialState = {listMode: 'detail', selectedContact: null}

describe('views reducer', () => {

  describe('initial state', () => {
    it('should handle initial state', () => {
      expect(view(undefined, {})).toEqual(initialState)
    })
  })

  describe('SET_EMPTY_CONTACT', () => {
    it('should set an empty contact as selected contact', () => {
      expect(
        view(initialState, {
          type: types.SET_EMPTY_CONTACT
        })
      ).toEqual({
        ...initialState,
        selectedContact: {
          firstName: '',
          lastName: '',
          tel: '',
          email: ''
        }
      })
    })
  })

  describe('SET_SELECTED_CONTACT', () => {
    it('should set contact as selected contact', () => {
      expect(
        view(initialState, {
          type: types.SET_SELECTED_CONTACT,
          contact: fullContact
        })
      ).toEqual({
        ...initialState,
        selectedContact: fullContact
      })
    })
  })

  describe('UNSELECT_CONTACT', () => {
    it('should set selected contact as null', () => {
      expect(
        view(initialState, {
          type: types.UNSELECT_CONTACT
        })
      ).toEqual({
        ...initialState,
        selectedContact: null
      })
    })
  })

  describe('TOGGLE_LIST_VIEW_MODE', () => {
    it('should toggle list mode value', () => {
      expect(
        view(initialState, {
          type: types.TOGGLE_LIST_VIEW_MODE
        })
      ).toEqual({
        ...initialState,
        listMode: 'mosaic'
      })
    })
  })

})

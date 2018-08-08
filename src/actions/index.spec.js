import * as types from '../constants/ActionTypes'
import * as actions from './index'

const contact = {
  id: 1,
  firstName : 'Test',
  lastName : 'User',
  tel: '123-456-789',
  email: 'test.user@example.com',
  avatarUrl: 'url'
}

describe('contact actions', () => {

  it('addContact should create ADD_CONTACT action', () => {
    expect(actions.addContact(contact)).toEqual({
      type: types.ADD_CONTACT,
      contact: contact
    })
  })
  
  it('deleteContact should create DELETE_CONTACT action', () => {
    expect(actions.deleteContact(contact)).toEqual({
      type: types.DELETE_CONTACT,
      contact: contact
    })
  })
  
  it('editContact should create EDIT_CONTACT action', () => {
    expect(actions.editContact(contact)).toEqual({
      type: types.EDIT_CONTACT,
      contact: contact
    })
  })
})


describe('view actions', () => {

  it('setSelectedContact should create SET_SELECTED_CONTACT action', () => {
    expect(actions.setSelectedContact(contact)).toEqual({
      type: types.SET_SELECTED_CONTACT,
      contact: contact
    })
  })

  it('setEmptyContact should create SET_EMPTY_CONTACT action', () => {
    expect(actions.setEmptyContact(contact)).toEqual({
      type: types.SET_EMPTY_CONTACT
    })
  })

  it('unselectContact should create UNSELECT_CONTACT action', () => {
    expect(actions.unselectContact(contact)).toEqual({
      type: types.UNSELECT_CONTACT
    })
  })

  it('toggleListViewMode should create TOGGLE_LIST_VIEW_MODE action', () => {
    expect(actions.toggleListViewMode(contact)).toEqual({
      type: types.TOGGLE_LIST_VIEW_MODE
    })
  })

})


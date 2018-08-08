import * as types from '../constants/ActionTypes'

export const addContact = contact => ({ type: types.ADD_CONTACT, contact })
export const editContact = contact => ({ type: types.EDIT_CONTACT, contact })
export const setSelectedContact = contact => ({ type: types.SET_SELECTED_CONTACT, contact })
export const setEmptyContact = contact => ({ type: types.SET_EMPTY_CONTACT, contact })
export const unselectContact = contact => ({ type: types.UNSELECT_CONTACT, contact })
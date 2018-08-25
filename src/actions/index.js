import * as types from '../constants/ActionTypes'

// CONTACT LIST ACTIONS

export const addContact = contact => ({ type: types.ADD_CONTACT, contact })
export const editContact = contact => ({ type: types.EDIT_CONTACT, contact })
export const deleteContact = contact => ({ type: types.DELETE_CONTACT, contact })

// VIEW SELECTION ACTIONS
export const setSelectedContact = contact => ({ type: types.SET_SELECTED_CONTACT, contact })
export const setEmptyContact = () => ({ type: types.SET_EMPTY_CONTACT })
export const unselectContact = () => ({ type: types.UNSELECT_CONTACT })
export const toggleListViewMode = () => ({ type: types.TOGGLE_LIST_VIEW_MODE })

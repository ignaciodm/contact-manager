import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  SET_SELECTED_CONTACT,
  SET_EMPTY_CONTACT,
  UNSELECT_CURRENT_CONTACT,
  TOGGLE_LIST_VIEW_MODE } from '../constants/ActionTypes'

import { createActions } from 'redux-actions'

// CONTACT LIST ACTIONS

const createEmptyContact = () =>  ({
  contact: {
    firstName: '',
    lastName: '',
    tel: '',
    email: ''
  }
  })

export const {
  addContact,
  editContact,
  deleteContact,
  setSelectedContact,
  setEmptyContact,
  unselectCurrentContact,
  toggleListViewMode
  } = createActions({
    SET_EMPTY_CONTACT: createEmptyContact,
    SET_SELECTED_CONTACT: contact => ({contact}),
    UNSELECT_CURRENT_CONTACT: contact => ({contact: null}),
    ADD_CONTACT: contact => ({contact}),
    EDIT_CONTACT: contact => ({contact}),
    DELETE_CONTACT: contact => ({contact})
    },
    TOGGLE_LIST_VIEW_MODE
);

import { SET_EMPTY_CONTACT, SET_SELECTED_CONTACT, UNSELECT_CONTACT, TOGGLE_LIST_VIEW_MODE } from '../constants/ActionTypes'

const view = (state = {listMode: 'detail', selectedContact: null}, action) => {
  switch (action.type) {
    case SET_EMPTY_CONTACT:

      return {
        ...state,
        selectedContact: {
          firstName: '',
          lastName: '',
          tel: '',
          email: ''
        }
      }

    case SET_SELECTED_CONTACT:
      return {
        ...state,
        selectedContact: action.contact
      };
    case UNSELECT_CONTACT:
      return {
        ...state,
        selectedContact: null
      };
    case TOGGLE_LIST_VIEW_MODE:
      let listMode = state.listMode === 'detail' ? 'mosaic' : 'detail';

      return {
        ...state,
        listMode: listMode
      };
    default:
      return state
  }
}

export default view
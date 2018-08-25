import { SET_EMPTY_CONTACT, SET_SELECTED_CONTACT, UNSELECT_CONTACT, TOGGLE_LIST_VIEW_MODE } from '../constants/ActionTypes'

export const DETAIL_LIST_MODE = 'DETAIL_LIST_MODE'
export const MOSAIC_LIST_MODE = 'MOSAIC_LIST_MODE'

// TODO detail should be constant
const view = (state = {listMode: DETAIL_LIST_MODE, selectedContact: null}, action) => {
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
      }
    case UNSELECT_CONTACT:
      return {
        ...state,
        selectedContact: null
      }
    case TOGGLE_LIST_VIEW_MODE:
      let listMode = state.listMode === DETAIL_LIST_MODE ? MOSAIC_LIST_MODE : DETAIL_LIST_MODE

      return {
        ...state,
        listMode: listMode
      }
    default:
      return state
  }
}

export default view

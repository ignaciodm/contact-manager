import {handleActions, combineActions} from 'redux-actions'
import { setEmptyContact, unselectCurrentContact, setSelectedContact} from '../actions/index'

export const DETAIL_LIST_MODE = 'DETAIL_LIST_MODE'
export const MOSAIC_LIST_MODE = 'MOSAIC_LIST_MODE'

// TODO detail should be constant
const initialState = { listMode: DETAIL_LIST_MODE, selectedContact: null }

const view = handleActions({
  [
    combineActions(
      setEmptyContact,
      setSelectedContact,
      unselectCurrentContact
    )
  ]: (state, { payload: { contact } }) => {
    return {
      ...state,
      selectedContact: contact
    }
  },
  TOGGLE_LIST_VIEW_MODE: (state, action) => {
    let listMode = state.listMode === DETAIL_LIST_MODE ? MOSAIC_LIST_MODE : DETAIL_LIST_MODE

    return {
      ...state,
      listMode: listMode
    }

  },
}, initialState)


export default view

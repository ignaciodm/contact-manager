import { SET_EMPTY_CONTACT, SET_SELECTED_CONTACT, UNSELECT_CONTACT } from '../constants/ActionTypes'

const selectedContact = (state = null, action) => {
  switch (action.type) {
    case SET_EMPTY_CONTACT:
      const emptyContact = {
        firstName: '',
        lastName: '',
        tel: '',
        email: ''
      }
      return emptyContact;
    case SET_SELECTED_CONTACT:
      return {...action.contact};
    case UNSELECT_CONTACT:
      return null;
    default:
      return state
  }
}

export default selectedContact
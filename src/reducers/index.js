import { combineReducers } from "redux";

import contacts from './contacts'
import selectedContact from './selectedContact'

const rootReducer = combineReducers({
  contacts,
  selectedContact
})

export default rootReducer

import { combineReducers } from "redux";

import contacts from './contacts'
import view from './view'

const rootReducer = combineReducers({
  contacts,
  view
})

export default rootReducer

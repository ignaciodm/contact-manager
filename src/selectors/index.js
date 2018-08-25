import { createSelector } from 'reselect'

const getSearchInputText = state => state.searchInputText
const getContacts = state => state.contacts

export const getVisibleContacts = createSelector(
  [getSearchInputText, getContacts],
  (searchInputText, contacts) => {
    // if (_.isEmpty(searchInputText)) {
    //   return contacts;
    // } else {
    return contacts // TODO if added search input component, contacts could be filtered
    // }
  }
)

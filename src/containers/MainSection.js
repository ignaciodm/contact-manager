import React from 'react'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection';

const mapStateToProps = (state) => {
  let view = state.view;
  let selectedContact = view.selectedContact;
  
  return {
    isEditing: selectedContact && selectedContact.id,
    isAddingNewContact: selectedContact && !selectedContact.id
  }
  
}

export default connect(
  mapStateToProps,
  null
)(MainSection)



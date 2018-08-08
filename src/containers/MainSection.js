import React from 'react'
import { connect } from 'react-redux'
import { setEmptyContact, toggleListViewMode }  from '../actions/index'
import MainSection from '../components/MainSection';

const mapStateToProps = (state) => {
  let view = state.view;
  
  let selectedContact = view.selectedContact;
  
  return {
    detailView: view.listMode === 'detail',
    isEditing: selectedContact && selectedContact.id,
    isAddingNewContact: selectedContact && !selectedContact.id
  }
  
}


const mapDispatchToProps = (dispatch) => {
  return {
    onAddNewContactClick: () => {
     dispatch(setEmptyContact())
    },
    onToggleListView: () => {
      dispatch(toggleListViewMode())
    }
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)



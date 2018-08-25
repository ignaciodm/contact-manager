import React from 'react'
import { connect } from 'react-redux'
import ListHeaderBar from '../components/ListHeaderBar'
import { setEmptyContact, toggleListViewMode } from '../actions/index'

const mapStateToProps = (state) => {
  let view = state.view
  let selectedContact = view.selectedContact

  return {
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListHeaderBar)

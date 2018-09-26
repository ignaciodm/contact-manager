import React from 'react'
import { connect } from 'react-redux'
import ListHeaderBar from '../components/ListHeaderBar'
import { setEmptyContact, toggleListViewMode } from '../actions/index'
import { DETAIL_LIST_MODE } from '../reducers/view'

const mapStateToProps = (state) => {
  let view = state.view

  return {
    isOnDetailViewType: view.listMode === DETAIL_LIST_MODE
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

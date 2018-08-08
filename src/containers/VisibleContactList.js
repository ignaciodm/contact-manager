import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSelectedContact }  from '../actions/index'
import ContactList from '../components/ContactList'
import { getVisibleContacts } from '../selectors'
import {DETAIL_LIST_MODE} from '../reducers/view'

const mapStateToProps = (state) => {
  let view = state.view;

  return {
    filteredContacts: getVisibleContacts(state),
    selectedContact: view.selectedContact,
    detailMode: view.listMode === DETAIL_LIST_MODE
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditContactClick: contact => {
      dispatch(setSelectedContact(contact));
    }
  };
}


const VisibleContactList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList)

export default VisibleContactList

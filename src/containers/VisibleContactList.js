import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSelectedContact }  from '../actions/index'
import ContactList from '../components/ContactList'
import { getVisibleContacts } from '../selectors'

const mapStateToProps = (state) => {
  let view = state.view;

  return {
    filteredContacts: getVisibleContacts(state),
    selectedContact: view.selectedContact,
    detailMode: view.listMode === 'detail'
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

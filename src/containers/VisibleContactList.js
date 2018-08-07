import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSelectedContact }  from '../actions/index'
import ContactList from '../components/ContactList'
import { getVisibleContacts } from '../selectors'

const mapStateToProps = state => ({
  filteredContacts: getVisibleContacts(state),
  selectedContact: state.selectedContact
})

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

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editContact, addContact, unselectContact }  from '../actions/index'
import ContactForm  from '../components/ContactForm'

const mapStateToProps = (state) => {
  return {
    contact: state.selectedContact,
    isEditing: state.selectedContact && state.selectedContact.id // TODO duplicated logic in parent component
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: contact => {
      if (contact.id) {
        dispatch(editContact(contact));
      } else {
        dispatch(addContact(contact));
      }

      dispatch(unselectContact());
    },
    onCancel: contact => {
      dispatch(unselectContact());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm)

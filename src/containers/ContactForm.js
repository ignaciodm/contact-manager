import { connect } from 'react-redux'
import { editContact, addContact, unselectCurrentContact } from '../actions/index'
import ContactForm from '../components/ContactForm'

const mapStateToProps = (state) => {
  let selectedContact = state.view.selectedContact
  return {
    contact: selectedContact,
    isEditing: selectedContact && selectedContact.id // TODO duplicated logic in parent component
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: contact => {
      if (contact.id) {
        dispatch(editContact(contact))
      } else {
        dispatch(addContact(contact))
      }

      dispatch(unselectCurrentContact())
    },
    onCancel: contact => {
      dispatch(unselectCurrentContact())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm)

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editContact, unselectContact }  from '../actions/index'
import ContactForm  from '../components/ContactForm'

const mapStateToProps = (state) => {
  return {
    contact: state.selectedContact,
    isEditing: state.selectedContact
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: contact => {
      dispatch(editContact(contact));
    },
    onCancel: contact => {
      dispatch(unselectContact());
    }
  };
}

const EditContactForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm)

export default EditContactForm

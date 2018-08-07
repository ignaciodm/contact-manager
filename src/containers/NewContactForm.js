import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addContact }  from '../actions/index'
import ContactForm  from '../components/ContactForm'
import { getVisibleContacts } from '../selectors'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: contact => {
      dispatch(addContact(contact));
    }
  };
}

const NewContactForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm)

export default NewContactForm

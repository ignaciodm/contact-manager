import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ContactActions from '../actions'
import ContactList from '../components/ContactList'
import { getVisibleContacts } from '../selectors'

const mapStateToProps = state => ({
  filteredContacts: getVisibleContacts(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ContactActions, dispatch)
})


const VisibleContactList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList)

export default VisibleContactList

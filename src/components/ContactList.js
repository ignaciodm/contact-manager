import React from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'

const ContactList = ({ filteredContacts, actions }) => (
  <ul className="media-list row contact-list">
    {filteredContacts.map(contact =>
      <Contact key={contact.id} contact={contact} {...actions} />
    )}
  </ul>
)

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
}

export default ContactList

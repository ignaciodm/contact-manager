import React from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'

const ContactList = ({ filteredContacts, selectedContact, onEditContactClick }) => (
  <ul className="media-list row contact-list">
    {filteredContacts.map(contact =>
      <Contact key={contact.id} contact={contact} isSelected={contact.id === (selectedContact && selectedContact.id)} onEditContactClick={onEditContactClick} />
    )}
  </ul>
)

// TODO
// probably shape can be type of Contact. Extend contact to selectedContact

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired
  }).isRequired).isRequired,
  selectedContact: PropTypes.object,
  onEditContactClick: PropTypes.func.isRequired
}

export default ContactList

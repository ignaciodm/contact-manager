import React from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'

const ContactList = ({ filteredContacts, selectedContact, detailMode, onEditContactClick }) => (
  <ul className='media-list row contact-list'>
    {filteredContacts.map(contact =>
      <Contact
        key={contact.id}
        contact={contact}
        isSelected={contact.id === (selectedContact && selectedContact.id)}
        detailMode={detailMode}
        onEditContactClick={onEditContactClick} />
    )}
  </ul>
)

// TODO
// probably shape can be type of Contact. Extend contact to selectedContact

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape(Contact.propTypes.contact).isRequired).isRequired,
  selectedContact: PropTypes.object,
  detailMode: PropTypes.bool.isRequired,
  onEditContactClick: PropTypes.func.isRequired
}

export default ContactList

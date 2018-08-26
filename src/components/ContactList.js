import React from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  contactList: {
    paddingTop: 10
  }
})

const ContactList = ({ filteredContacts, selectedContact, detailMode, onEditContactClick }) => (
  <ul className={`media-list row ${css(styles.contactList)}`}>
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

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape(Contact.propTypes.contact).isRequired).isRequired,
  selectedContact: PropTypes.object,
  detailMode: PropTypes.bool.isRequired,
  onEditContactClick: PropTypes.func.isRequired
}

export default ContactList

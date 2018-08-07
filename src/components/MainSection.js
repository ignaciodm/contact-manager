import React from 'react'
import PropTypes from 'prop-types'
import VisibleContactList from '../containers/VisibleContactList'
import ContactForm from '../containers/ContactForm'

const MainSection = ({}) =>
  (
    // Component that will allow filter the list by name, or some other properties
    // <SearchInput />

    // Component structure to add a new contact.
    // Ideally a modal or some other interaction
    //
    // <SimpleModal>
    //   <ContactModal>
    // </SimpleModal>

    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <VisibleContactList  />
        </div>
        <div className="col-sm-12 col-md-6">
          <ContactForm  />
        </div>
      </div>
    </div>

  )

MainSection.propTypes = {
  // contactsCount: PropTypes.number.isRequired
}

export default MainSection;
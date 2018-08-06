import React from 'react'
import PropTypes from 'prop-types'
import VisibleContactList from '../containers/VisibleContactList'

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
          <VisibleContactList className="col-xs-12" />
      </div>
    </div>

  )

MainSection.propTypes = {
  // contactsCount: PropTypes.number.isRequired
}

export default MainSection;
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import VisibleContactList from '../containers/VisibleContactList'
import NewContactForm from '../containers/NewContactForm'
import EditContactForm from '../containers/EditContactForm'

class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: this.props.isEditing};
  }

  render() {
    const isEditing = this.props.isEditing;
    let form;

    if (isEditing) {
      form = <EditContactForm />
    } else {
      // form = <NewContactForm />
    }

    return (
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
          <div className={isEditing ? "col-sm-12 col-md-6":  "col-sm-12"}>
            <VisibleContactList  />
          </div>
          <div className={isEditing ? "col-sm-12 col-md-6":  "col-sm-12"}>
            {form}
          </div>
        </div>
      </div>

    )
  }

}

const mapStateToProps = state => ({
  isEditing: state.selectedContact
})


const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  null
)(MainSection)



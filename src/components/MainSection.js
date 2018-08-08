import React from 'react'
import { connect } from 'react-redux'
import VisibleContactList from '../containers/VisibleContactList'
import ContactForm from '../containers/ContactForm'
import { setEmptyContact }  from '../actions/index'
import Button from 'react-bootstrap/lib/Button'

class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: this.props.isEditing,
      isAddingNewContact: this.props.isAddingNewContact
    };
  }

  handleAddNewContactClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.props.onAddNewContactClick()
  };

  render() {
    const isEditing = this.props.isEditing;
    const isAddingNewContact = this.props.isAddingNewContact;
    const showForm = isEditing || isAddingNewContact;

    let form;

    if (showForm) {
      form = <ContactForm />
    } 

    return (
      // Component that will allow filter the list by name, or some other properties
      // <SearchInput />

      <div className="container">

        <div className="row">

          <div className={showForm ? "col-sm-12 col-md-6":  "col-sm-12"} style={{'overflowY': showForm ? 'scroll' : ''}}>
            <Button type="button" onClick={this.handleAddNewContactClick}>Add New Contact</Button>
            <VisibleContactList  />
          </div>
          
          <div className={showForm ? "col-sm-12 col-md-6":  "col-sm-12"}>
            {form}
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  isEditing: state.selectedContact && state.selectedContact.id,
  isAddingNewContact: state.selectedContact && !state.selectedContact.id
})


const mapDispatchToProps = (dispatch) => {
  return {
    onAddNewContactClick: () => {
     dispatch(setEmptyContact())
    }
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)



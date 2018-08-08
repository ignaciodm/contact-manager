import React from 'react'

import Col from 'react-bootstrap/lib/Col'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import Button from 'react-bootstrap/lib/Button'
import Panel from 'react-bootstrap/lib/Panel'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <Col componentClass={ControlLabel} sm={12} md={4}>
        {label}
      </Col>
      <Col sm={12} md={8}>
        <FormControl {...props} />
        {help &&  <small className="form-text text-muted">{help}</small>}
        {help && <HelpBlock>{help}</HelpBlock>}
        <FormControl.Feedback />
      </Col>
    </FormGroup>
  );
}

/**
 * It renders the page layout containing a header and the form element.
 * The layout uses Bootstrap 4 classes as a visual theme.
 **/
class ContactForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    // let emptyContact = {
    //   firstName: '',
    //   lastName: '',
    //   tel: '',
    //   email: ''
    // }

    this.state = {
      contact: this.props.contact
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.contact.id !== prevProps.contact.id) {
      this.setState({contact: this.props.contact});
    }
  }

  handleChange = (event, contactProperty) => {
    let newContactState =  {...this.state.contact};
    newContactState[contactProperty] = event.currentTarget.value ;
    this.setState({contact: newContactState});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    //Now it just displays a success message.
    this.setState({...this.state.contact, showFormSuccess: true}); // TODO check if needed showFormSuccess needed

    this.props.onSubmit(this.state.contact)
    
    setTimeout(() => {this.setState({...this.state.contact, showFormSuccess: false});}, 5000)
  }

  handleClose = (event) => {
    event.preventDefault();
    this.props.onCancel()
  }

  _renderSuccessMessage() {
    return (
      <div className={"alert alert-success mt-4"} role="alert">
        Form was successfully validated and is ready to be submitted!
      </div>
    );
  }

  render() {

    return (
      <div>
        <div className="contact-form row">
          <div className="card">
            <h4 className="text-center card-header" >
              {this.props.isEditing ? 'Edit' : 'Add'} Contact
            </h4>
            <div className="card-body">

             <form onSubmit={this.handleSubmit} className="form-horizontal">

               <FieldGroup
                 id="contactFormFirstName"
                 type="text"
                 label="First name"
                 value={this.state.contact.firstName}
                 onChange={(event) => this.handleChange(event, 'firstName')}
                 required="true"
               />

               <FieldGroup
                 id="contactFormLastName"
                 type="text"
                 label="Last name"
                 value={this.state.contact.lastName}
                 onChange={(event) => this.handleChange(event, 'lastName')}
                 required="true"
               />

               <FieldGroup
                 id="contactFormEmail"
                 type="email"
                 required="true"
                 label="Email"
                 value={this.state.contact.email}
                 onChange={(event) => this.handleChange(event, 'email')}
                 placeholder="name@example.com"
               />

               <FieldGroup
                 id="contactTelephone"
                 type="text"
                 label="Telephone number"
                 value={this.state.contact.tel}
                 onChange={(event) => this.handleChange(event, 'tel')}
                 placeholder="123-456-789"
                 required="true"

               />

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button className="btn-primary" type="submit">{this.props.isEditing ? 'Update' : 'Add'} Contact</Button>
                  <Button className="btn-secondary" type="button" onClick={this.handleClose}>Cancel</Button>
                </Col>
              </FormGroup>
            </form>

            </div>
          </div>
        </div>
       {this.state.showFormSuccess ? this._renderSuccessMessage() : null}
     </div>
    )

  }
}

export default ContactForm
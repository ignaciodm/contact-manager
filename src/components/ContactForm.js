import React from 'react'

import Col from 'react-bootstrap/lib/Col'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import Button from 'react-bootstrap/lib/Button'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <Col componentClass={ControlLabel} sm={2}>
        {label}
      </Col>
      <Col sm={10}>
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

    this.state = {
      contact: {
        firstName: '',
        lastName: '',
        tel: '',
        email: ''
      }
    };
  }

  handleChange = (event, contactProperty) => {
    let newContactState =  {...this.state.contact};
    newContactState[contactProperty] = event.currentTarget.value ;
    this.setState({contact: newContactState});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    //Now it just displays a success message.
    this.setState({...this.state.contact, showFormSuccess: true});

    this.props.onSubmit(this.state.contact)
    
    setTimeout(() => {this.setState({...this.state.contact, showFormSuccess: false});}, 5000)
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
        <div className="row">
          <div className="card">
            <h4 className="text-center card-header" >
              Add/Edit TODO Contact Test Form
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
                  <Button type="submit">Add Contact</Button>
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
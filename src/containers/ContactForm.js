import React from 'react'


import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Form from 'react-bootstrap/lib/Form'
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
  state = {
    showFormSuccess: false
  };

  handleSubmit = () => {
    //Now it just displays a success message.
    this.setState({showFormSuccess: true});
    setTimeout(() => {this.setState({showFormSuccess: false});}, 5000)
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
                 required="true"
                 label="First name"
               />

               <FieldGroup
                 id="contactFormLastName"
                 type="text"
                 required="true"
                 label="Last name"
               />

               <FieldGroup
                 id="contactFormEmail"
                 type="email"
                 required="true"
                 placeholder="Email"
                 label="Email"
                 placeholder="name@example.com"
               />

               <FieldGroup
                 id="contactTelephone"
                 type="text"
                 required="true"
                 placeholder="123-456-789"
                 label="Telephone number"
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
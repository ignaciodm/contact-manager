import React from 'react'

import Col from 'react-bootstrap/lib/Col'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import Button from 'react-bootstrap/lib/Button'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  button: {
    margin: 5
  },
  btnPrimary: {
    float: 'right'
  },
  btnSecondary: {
    float: 'left'
  }
})
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

    this.state = {
      contact: this.props.contact
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.contact.id !== prevProps.contact.id) {
      this.setState({contact: this.props.contact});
    }
  }

  componentWillUnmount(prevProps) {
    this.setState({contact: null});
  }

  handleChange = (event, contactProperty) => {
    let newContactState =  {...this.state.contact};
    newContactState[contactProperty] = event.currentTarget.value ;
    this.setState({contact: newContactState});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.contact)
  }

  handleCancel = (event) => {
    event.preventDefault();
    this.props.onCancel()
  }

  render() {

    return (
      <div className="contact-form card row">
        <h4 className="text-center card-header">
          {this.props.isEditing ? 'Edit' : 'Add'} Contact
        </h4>
        <form onSubmit={this.handleSubmit} className="card-body form-horizontal">
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
              <Button className={`btn-primary ${css([styles.button, styles.btnPrimary])}`} type="submit">{this.props.isEditing ? 'Update' : 'Add'} Contact</Button>
              <Button className={`btn-secondary ${css([styles.button, styles.btnSecondary])}`} type="button" onClick={this.handleCancel}>Cancel</Button>
            </Col>
          </FormGroup>
        </form>

      </div>
    )

  }
}

export default ContactForm
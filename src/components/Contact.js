import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
    // editContact: PropTypes.func.isRequired,
    // deleteContact: PropTypes.func.isRequired
  }

  state = {}

  render() {
    const { contact } = this.props

    return (
      <li className="media col-md-6 col-lg-4">
        <div className="thumbnail">
          <img className="media-object" src={`${contact.avatarUrl}`}/>
        </div>
        <div className="media-heading">
          <h3>
            {contact.firstName} {contact.lastName}
            <small>
              <a href="#contacts/edit/{contact.id}"><span className="glyphicon glyphicon-pencil"></span></a>
              <a href="#contacts/delete/{contact.id}" className="delete-contract">
                <span className="glyphicon glyphicon-trash"></span>
              </a>
            </small>
          </h3>
        </div>
        <div className="media-body">
          <dl>
            <dt>Phone Number:</dt>
            <dd>{contact.tel}</dd>
            <dt>Email:</dt>
            <dd>{contact.email}</dd>
          </dl>
        </div>
        <hr/>
      </li>
    )
  }
}

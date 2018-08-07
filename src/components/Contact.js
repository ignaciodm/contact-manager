import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onEditContactClick: PropTypes.func.isRequired, // TODO Instead of handle this, should try router
    // deleteContact: PropTypes.func.isRequired
  }

  handleEditClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.props.onEditContactClick(this.props.contact)
  };

  state = {}

  render() {
    const { contact, isSelected } = this.props

    return (
      <li className="media col-md-6 col-lg-4">
        {isSelected ? 'SELECTED' : 'NO'}
        <div className="thumbnail">
          <img className="media-object" src={`${contact.avatarUrl}`}/>
        </div>
        <div className="media-heading">
          <h3>
            {contact.firstName} {contact.lastName}
            <small>
              <a href={`contacts/edit/${contact.id}`} onClick={this.handleEditClick}>
                <span className="glyphicon glyphicon-pencil"></span>
              </a>
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

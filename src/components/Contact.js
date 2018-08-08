import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    detailMode: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onEditContactClick: PropTypes.func.isRequired, // TODO Instead of handle this, should try router
    // deleteContact: PropTypes.func.isRequired
  }

  handleEditClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.props.onEditContactClick(this.props.contact)
  };

  state = {};

  render() {
    const { contact, isSelected, detailMode } = this.props;

    let classNames = classnames('media', {
      'col-md-6 col-lg-4': !detailMode,
      'col-sm-12': detailMode,
      selected: isSelected,
      detail: detailMode
      })

    let element;

    if (detailMode) {
      element = (
        <div className="row contact">
          <div className="col-sm-2 contact-avatar">
            <img className="media-object" src={`${contact.avatarUrl}`}/>
          </div>
          <div className="col-sm-10 contact-description">
            <p className="contact-fullname">
              {contact.firstName} {contact.lastName}
            </p>
          </div>
        </div>
      )
    } else {
      element = (
        <div>
          <div className="thumbnail">
            <img className="media-object" src={`${contact.avatarUrl}`}/>
          </div>
          <div className="media-heading">
            <h3>
              {contact.firstName} {contact.lastName}
            </h3>
          </div>
          <div className="media-body">
            <dl>
              <dd>{contact.email}</dd>
            </dl>
          </div>
          <hr/>
        </div>
      )
    }

    return (
       <li className={classNames}  onClick={this.handleEditClick}>
        {element}
      </li>
    )
  }
}

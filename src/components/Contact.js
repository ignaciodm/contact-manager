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

    let classNames = classnames('contact', {
      'col-md-6 mosaic': !detailMode,
      'col-sm-12 detail': detailMode,
      selected: isSelected
    })

    let element;

    if (detailMode) {
      element = (
        <div className="media">
          <img className="media-object pull-left" src={`${contact.avatarUrl}`}/>
          <div className="media-body">
            <h4 className="media-heading"> {contact.firstName} {contact.lastName}</h4>
            <span className="media-detail">{contact.email}</span>
          </div>
        </div>
      )
    } else {
      element = (
        <div className="media">
          <div className="thumbnail pull-left">
            <img className="media-object " src={`${contact.avatarUrl}`}/>
          </div>
          <div className="media-body">
            <h3 className="media-heading"> {contact.firstName} {contact.lastName}</h3>
            <dl>
              <dt>Email:</dt>
              <dd><span className="media-detail">{contact.email}</span></dd>
              <dt>Phone:</dt>
              <dd><span className="media-detail">{contact.tel}</span></dd>
            </dl>
          </div>
        </div>
      )
    }

    return (
       <li className={classNames} onClick={this.handleEditClick}>
         {element}
      </li>
    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  contact: {
    ':hover': {
      borderColor: '#563d7c',
      cursor: 'pointer',
      backgroundColor: '#b2e7ff'
    }
  },
  selected: {
    background: '#b2e7ff'
  },
  detail: {
    media: {
      padding: 10,
      borderBottom: '1px solid #ddd',
      'img.media-object': {
        width: 80,
        borderRadius: 35
      },
      mediaBody: {
        paddingTop: 12,
        mediaDetail: {
          color: '#dd1144'
        }
      }
    }
  }
})

export default class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    detailMode: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired, // TODO Instead of handle this, should try router
    // deleteContact: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.onClick(this.props.contact)
  };

  state = {};

  classNames = () => {
    const { isSelected, detailMode } = this.props;

    return classnames(
      detailMode ? 'col-sm-12' : 'col-md-6',
      css(styles.contact,
        isSelected ? styles.selected : '',
        detailMode ? styles.detail : ''
      )
    )
  }

  renderDetailContact = () => {
    const {contact, detailMode} = this.props;
    if (detailMode) {
      return (<div className="media">
        <img className="media-object pull-left" src={`${contact.avatarUrl}`}/>
        <div className="media-body">
          <h4 className="media-heading"> {contact.firstName} {contact.lastName}</h4>
          <span className="media-detail">{contact.email}</span>
        </div>
      </div>
      )
    }
  }

  renderMosaicContact = () => {
    const {contact, detailMode} = this.props;
    if (!detailMode) {
      return (<div className="media">
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
      </div>)
    }

  }

  render() {
    return (
       <li className={this.classNames()} onClick={this.handleClick}>
         {this.renderDetailContact()}
         {this.renderMosaicContact()}
      </li>
    )
  }


}

import React from "react";
import PropTypes from 'prop-types';

class HelloWorld extends React.Component {

  render() {
    return <div>Hello {this.props.name}</div>
  }

}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
}

HelloWorld.defaultProps = {
  name: 'Nacho'
}

export default HelloWorld;
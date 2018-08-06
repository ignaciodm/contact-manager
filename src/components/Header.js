import React from "react";
import PropTypes from 'prop-types';

class Header extends React.Component {

  render() {
    return (
      <header className="bs-header">
        <div className="container">
          <h1>Contact Manager</h1>
          <p>Simple React/Redux example application</p>
        </div>
      </header>
    )
  }

}
export default Header
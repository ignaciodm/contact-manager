import React from "react";
import PropTypes from 'prop-types';

class Header extends React.Component {

  render() {
    return (
      <header className="bs-header">
        <div className="container row">
          <h1>
            Contact Manager
            <small>Simple React/Redux example application</small>
          </h1>
        </div>
      </header>
    )
  }

}
export default Header
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavBar({ title, icon }) {
  return (
    <div className="navbar bg-primary">
      <Link to="/">
        <h2>
          <i className={`${icon} logo-icon`}></i>
          {title}
        </h2>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

NavBar.defaultProps = {
  title: "ContactBook",
  icon: "far fa-address-book",
};

export default NavBar;

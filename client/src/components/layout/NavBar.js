import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../logo/logo.png";

function NavBar({ title }) {
  return (
    <div className="navbar bg-primary">
      <h1 className="name-logo">
        <img
          src={logo}
          alt="Contact book logo"
          style={{ width: "50px", marginRight: "0.6rem" }}
        />{" "}
        {title}
      </h1>
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
};

NavBar.defaultProps = {
  title: "Contact Book",
};

export default NavBar;

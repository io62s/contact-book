import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";

function NavBar({ title, icon }) {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const handleLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={handleLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );
  return (
    <div className="navbar bg-primary">
      <Link to="/">
        <h2>
          <i className={`${icon} logo-icon`}></i>
          {title}
        </h2>
      </Link>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
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

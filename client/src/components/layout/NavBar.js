import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

function NavBar({ title, icon }) {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const handleLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>
        Hello <span className="loged-in-name">{user && user.name}</span>
      </li>
      <li>
        <a onClick={handleLogout} href="#!">
          <i style={{ fontSize: "1rem" }} className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">
          <i style={{ fontSize: "1rem" }} className="fas fa-user-plus"></i>{" "}
          Register
        </Link>
      </li>
      <li>
        <Link to="/login">
          <i style={{ fontSize: "1rem" }} className="fas fa-sign-in-alt"></i>{" "}
          Login
        </Link>
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

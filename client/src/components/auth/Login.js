import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

function Login() {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  let history = useHistory();

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
    if (error) {
      setAlert(error, "danger");
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login({ email, password });
    }
  };
  return (
    <div className="form-container">
      <h2>
        Account <span className="text-primary">Login</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-block add-contact"
        />
      </form>
    </div>
  );
}

export default Login;

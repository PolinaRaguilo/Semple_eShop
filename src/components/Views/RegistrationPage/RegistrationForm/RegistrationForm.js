import React from 'react';
import { Link } from 'react-router-dom';

import './RegistrationForm.css';

class RegistrationForm extends React.Component {
  render() {
    return (
      <div className="registration-container">
        <div className="card card-container">
          <img
            id="profile-img"
            className="profile-img-card"
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="newUserImg"
          />
          <p id="profile-name" className="profile-name-card">
            Sign Up
          </p>
          <form className="form-signin" action="submit">
            <div className="row">
              <div className="col">
                <label htmlFor="input-FirstName">Enter your name:</label>
                <input
                  type="text"
                  id="input-FirstName"
                  className="form-control"
                  placeholder="Name"
                  required
                />

                <label htmlFor="input-LastName">Enter your surname:</label>
                <input
                  type="text"
                  id="input-LastName"
                  className="form-control"
                  placeholder="Surname"
                  required
                />

                <label htmlFor="input-email">
                  Enter your email
                  <br />
                  (your login):
                </label>
                <input
                  type="email"
                  id="input-email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col password-col">
                <label htmlFor="input-password">Enter your password:</label>
                <input
                  type="password"
                  id="input-password"
                  className="form-control"
                  placeholder="Password"
                  required
                />

                <label htmlFor="input-passwordCheck">Confirm your password:</label>
                <input
                  type="password"
                  id="input-passwordCheck"
                  className="form-control"
                  placeholder="Confirm password"
                  required
                />
              </div>
            </div>

            <button className="btn btn-lg btn-primary btn-block btn-signup" type="submit">
              Sign Up
            </button>
            <Link to="/" className="link-toLogin">
              Have an account? Sign In
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;

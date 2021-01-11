import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fbDatabase from '../../../../config/fbConfig';
import { addNewUser } from '../../../../redux/actions/usersAction';

import './RegistrationForm.css';

class RegistrationForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onRegistrationSubmit = e => {
    const { firstName, lastName, email, password } = this.state;
    e.preventDefault();
    fbDatabase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.props.addNewUser(firstName, lastName, email);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

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
          <form className="form-signin" action="submit" onSubmit={this.onRegistrationSubmit}>
            <div className="row">
              <div className="col">
                <label htmlFor="input-FirstName">Enter your name:</label>
                <input
                  type="text"
                  id="input-FirstName"
                  name="firstName"
                  className="form-control"
                  placeholder="Name"
                  onChange={this.onInputChange}
                  required
                />

                <label htmlFor="input-LastName">Enter your surname:</label>
                <input
                  type="text"
                  id="input-LastName"
                  name="lastName"
                  className="form-control"
                  placeholder="Surname"
                  onChange={this.onInputChange}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="input-email">Enter your email (your login):</label>
                <input
                  type="email"
                  id="input-email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={this.onInputChange}
                  required
                />
                <label htmlFor="input-password">Enter your password:</label>
                <input
                  type="password"
                  id="input-password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={this.onInputChange}
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

const mapDispatchToProps = dispatch => {
  return {
    addNewUser: (firstName, lastName, email) => dispatch(addNewUser(firstName, lastName, email)),
  };
};

RegistrationForm.propTypes = {
  addNewUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(RegistrationForm);

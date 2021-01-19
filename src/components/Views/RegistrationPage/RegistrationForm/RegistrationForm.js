import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { AlertTitle } from '@material-ui/lab';
import Alert from '@material-ui/lab/Alert';
import fbDatabase from '../../../../config/fbConfig';
import { addNewUser } from '../../../../redux/actions/usersAction';
import './RegistrationForm.css';
import {
  errorNewUser,
  onSuccessHide,
  onSuccessRegistration,
} from '../../../../redux/actions/authorizationAction';
import registrationSchema from '../../../../Validation/RegistrationSchema';

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

  clearInputs = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

  onSuccessHandler = () => {
    this.props.onSuccessClose();
  };

  onRegistrationSubmit = e => {
    const { firstName, lastName, email, password } = this.state;
    const dataCheck = {
      firstName,
      lastName,
      email,
      password,
    };
    e.preventDefault();

    registrationSchema
      .validate(dataCheck)
      .then(() => {
        fbDatabase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            this.props.onSuccess();
            this.props.addNewUser(firstName, lastName, email);
            this.clearInputs();
          })
          .catch(err => {
            // eslint-disable-next-line default-case
            switch (err.code) {
              case 'auth/email-already-in-use':
              case 'auth/invalid-email':
              case 'auth/weak-password':
                this.props.onError(err.message);
                break;
            }
          });
      })
      .catch(errVal => {
        this.props.onError(errVal.errors.join(''));
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
          {this.props.successNewUser ? (
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              You have successfully registered in eShop.
              <br />
              <Link to="/" onClick={this.onSuccessHandler}>
                Click to enter the site as a registered user!
              </Link>
            </Alert>
          ) : null}
          {this.props.registrationError ? (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {this.props.regErrorText}
            </Alert>
          ) : null}
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
                  value={this.state.firstName}
                />

                <label htmlFor="input-LastName">Enter your surname:</label>
                <input
                  type="text"
                  id="input-LastName"
                  name="lastName"
                  className="form-control"
                  placeholder="Surname"
                  onChange={this.onInputChange}
                  value={this.state.lastName}
                />
              </div>
              <div className="col">
                <label htmlFor="input-email">Enter your email (your login):</label>
                <input
                  type="text"
                  id="input-email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={this.onInputChange}
                  value={this.state.email}
                />
                <label htmlFor="input-password">Enter your password:</label>
                <input
                  type="password"
                  id="input-password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={this.onInputChange}
                  value={this.state.password}
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

const mapStateToProps = state => {
  return {
    registrationError: state.authorizationReducer.registrationError,
    regErrorText: state.authorizationReducer.registrationErrorText,
    successNewUser: state.authorizationReducer.success,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewUser: (firstName, lastName, email) => dispatch(addNewUser(firstName, lastName, email)),
    onError: msg => dispatch(errorNewUser(msg)),
    onSuccess: () => dispatch(onSuccessRegistration()),
    onSuccessClose: () => dispatch(onSuccessHide()),
  };
};

RegistrationForm.propTypes = {
  addNewUser: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onSuccessClose: PropTypes.func.isRequired,
  registrationError: PropTypes.bool.isRequired,
  regErrorText: PropTypes.string.isRequired,
  successNewUser: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import fbDatabase from '../../../../config/fbConfig';
import {
  addCurrentUser,
  adminLogin,
  errorLogin,
  onCloseError,
  passwordError,
  userLogin,
} from '../../../../redux/actions/authorizationAction';
import './LoginForm.css';

class LoginForm extends React.Component {
  state = {
    login: '',
    password: '',
  };

  errorClasses = 'alert alert-dismissible alert-primary ';

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onAuthSubmit = e => {
    const { login, password } = this.state;
    e.preventDefault();

    if (login === 'admin@admin' && password === 'admin') {
      this.props.onLoginAdmin();
      this.props.onAddCurrentUser(login);
    } else {
      fbDatabase
        .auth()
        .signInWithEmailAndPassword(login, password)
        .then(() => {
          this.props.onLoginUser();
          this.props.onAddCurrentUser(login);
        })
        // eslint-disable-next-line consistent-return
        .catch(err => {
          // eslint-disable-next-line default-case
          switch (err.code) {
            case 'auth/invalid-email':
            case 'auth/user-disabled':
            case 'auth/user-not-found':
              this.props.onEmailError(err.message);
              break;
            case 'auth/wrong-password':
              this.props.onPswdError(err.message);
              break;
          }
        });
    }
  };

  render() {
    if (this.props.logged) {
      return <Redirect to="/items" />;
    }
    if (this.props.showAdmin) {
      return <Redirect to="/admin" />;
    }
    return (
      <div className="loginBody">
        <div className="login-container">
          <div className="card card-container">
            <img
              id="profile-img"
              className="profile-img-card"
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="userImg"
            />
            <div
              className={
                this.props.openError ? `${this.errorClasses}error-data` : this.errorClasses
              }
            >
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                onClick={this.props.onCloseError}
              >
                &times;
              </button>
              <i className="fas fa-exclamation" />
              <h5>
                {this.props.isErrorEmail ? this.props.msgEmail : null}
                {this.props.isErrorPassword ? this.props.msgPassword : null}
              </h5>
            </div>
            <form className="form-signin" action="submit" onSubmit={this.onAuthSubmit}>
              <input
                type="text"
                name="login"
                id="inputEmail"
                className="form-control"
                placeholder="Login"
                onChange={this.onInputChange}
                required
              />
              <input
                type="password"
                id="inputPassword"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={this.onInputChange}
                required
              />
              <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">
                Sign In
              </button>
            </form>
            <Link to="/registration" className="signUp">
              Don&#039;t have an account? Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  logged: PropTypes.bool.isRequired,
  showAdmin: PropTypes.bool.isRequired,
  onLoginUser: PropTypes.func.isRequired,
  onLoginAdmin: PropTypes.func.isRequired,
  onAddCurrentUser: PropTypes.func.isRequired,
  onEmailError: PropTypes.func.isRequired,
  onPswdError: PropTypes.func.isRequired,
  msgEmail: PropTypes.string.isRequired,
  msgPassword: PropTypes.string.isRequired,
  isErrorEmail: PropTypes.bool.isRequired,
  isErrorPassword: PropTypes.bool.isRequired,
  onCloseError: PropTypes.func.isRequired,
  openError: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    logged: state.authorizationReducer.logged,
    showAdmin: state.authorizationReducer.showAdmin,
    usersData: state.usersReducer.usersAdmin,
    msgEmail: state.authorizationReducer.emailErrorText,
    msgPassword: state.authorizationReducer.pswdErrorText,
    isErrorEmail: state.authorizationReducer.emailError,
    isErrorPassword: state.authorizationReducer.pswdError,
    openError: state.authorizationReducer.openError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginUser: () => dispatch(userLogin()),
    onLoginAdmin: () => dispatch(adminLogin()),
    onAddCurrentUser: user => dispatch(addCurrentUser(user)),
    onEmailError: msg => dispatch(errorLogin(msg)),
    onPswdError: msg => dispatch(passwordError(msg)),
    onCloseError: () => dispatch(onCloseError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

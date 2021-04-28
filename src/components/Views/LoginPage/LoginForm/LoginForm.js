import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import fbDatabase from '../../../../config/fbConfig';
import loginSchema from '../../../../Validation/LoginValidation';
import {
  adminLogin,
  errorLogin,
  onCloseError,
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
    const checkData = {
      login,
      password,
    };
    loginSchema
      .validate(checkData)
      .then(() => {
        if (login === 'admin@admin' && password === 'admin') {
          localStorage.setItem('currentUser', login);
          this.props.onLoginAdmin(login);
        } else {
          fbDatabase
            .auth()
            .signInWithEmailAndPassword(login, password)
            .then(() => {
              localStorage.setItem('currentUser', login);
              this.props.onLoginUser(login);
            })
            // eslint-disable-next-line consistent-return
            .catch(err => {
              // eslint-disable-next-line default-case
              switch (err.code) {
                case 'auth/invalid-email':
                case 'auth/user-disabled':
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                  this.props.onErrorMsg(err.message);
                  break;
              }
            });
        }
      })
      .catch(errLogin => {
        this.props.onErrorMsg(errLogin.errors.join(''));
      });
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
              <h5>{this.props.isError ? this.props.msgError : null}</h5>
            </div>
            <form className="form-signin" action="submit" onSubmit={this.onAuthSubmit}>
              <input
                type="text"
                name="login"
                id="inputEmail"
                className="form-control"
                placeholder="Login"
                onChange={this.onInputChange}
              />
              <input
                type="password"
                id="inputPassword"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={this.onInputChange}
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
  onErrorMsg: PropTypes.func.isRequired,
  msgError: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  onCloseError: PropTypes.func.isRequired,
  openError: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    logged: state.authorizationReducer.logged,
    showAdmin: state.authorizationReducer.showAdmin,
    usersData: state.usersReducer.usersAdmin,
    msgError: state.authorizationReducer.errorText,
    isError: state.authorizationReducer.isError,
    openError: state.authorizationReducer.openError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginUser: user => dispatch(userLogin(user)),
    onLoginAdmin: admin => dispatch(adminLogin(admin)),
    onErrorMsg: msg => dispatch(errorLogin(msg)),
    onCloseError: () => dispatch(onCloseError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

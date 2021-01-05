import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  addCurrentUser,
  adminLogin,
  userLogin,
} from '../../../../redux/actions/authorizationAction';
import './LoginForm.css';

class LoginForm extends React.Component {
  state = {
    login: '',
    password: '',
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onAuthSubmit = e => {
    const { login, password } = this.state;

    e.preventDefault();
    for (let i = 0; i < this.props.usersData.length; i++) {
      if (login === this.props.usersData[i].email && password === '2020') {
        this.props.onLoginUser();
        this.props.onAddCurrentUser(login);
      } else if (login === 'admin' && password === 'admin') {
        this.props.onLoginAdmin();
        this.props.onAddCurrentUser(login);
      } else {
        console.log('Error!');
      }
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
  usersData: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    logged: state.authorizationReducer.logged,
    showAdmin: state.authorizationReducer.showAdmin,
    usersData: state.usersReducer.usersAdmin,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginUser: () => dispatch(userLogin()),
    onLoginAdmin: () => dispatch(adminLogin()),
    onAddCurrentUser: user => dispatch(addCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

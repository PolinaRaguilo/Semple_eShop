import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {
  render() {
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
            <p id="profile-name" className="profile-name-card" />
            <form className="form-signin" action="submit">
              <input
                type="text"
                id="inputEmail"
                className="form-control"
                placeholder="Login"
                required
              />
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required
              />
              <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">
                Sign In
              </button>
            </form>
            <a href="#" className="signUp">
              Don&#039;t have an account? Sign Up
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;

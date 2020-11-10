import React from "react";
import './LoginForm.css';

class LoginForm extends React.Component {
  render() {
    return (
    <div className="loginBody">
      <div className="container">
        <div className="card card-container">
          <img
            id="profile-img"
            className="profile-img-card"
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          />
          <p id="profile-name" className="profile-name-card"></p>
          <form className="form-signin" action="submit">
            <input
              type="text"
              id="inputEmail"
              className="form-control"
              placeholder="Логин"
              required
            />
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Пароль"
              required
            />
            <button
              className="btn btn-lg btn-primary btn-block btn-signin"
              type="submit"
            >
              Войти
            </button>
          </form>
          <a href="#" className="signUp">
            Зарегистрироваться
          </a>
        </div>
      </div>
      </div>
    );
  }
}

export default LoginForm;
import React from "react";
import './LoginForm.css';

class LoginForm extends React.Component {
  render() {
    return (
    <div className="loginBody">
      <div class="container">
        <div class="card card-container">
          <img
            id="profile-img"
            class="profile-img-card"
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          />
          <p id="profile-name" class="profile-name-card"></p>
          <form class="form-signin" action="submit">
            <input
              type="text"
              id="inputEmail"
              class="form-control"
              placeholder="Логин"
              required
            />
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Пароль"
              required
            />
            <button
              class="btn btn-lg btn-primary btn-block btn-signin"
              type="submit"
            >
              Войти
            </button>
          </form>
          <a href="#" class="signUp">
            Зарегистрироваться
          </a>
        </div>
      </div>
      </div>
    );
  }
}

export default LoginForm;
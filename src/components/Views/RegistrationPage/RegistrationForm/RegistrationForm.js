import React from "react";

import "./RegistrationForm.css";

class RegistrationForm extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card card-container">
          <img
            id="profile-img"
            className="profile-img-card"
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          />
          <p id="profile-name" className="profile-name-card">
            Регистрация
          </p>
          <div className="container">
            <form className="form-signin" action="submit">
              <div className="row">
                <div className="col ">
                  <label for="inputFirstName">Введите имя:</label>
                  <input
                    type="text"
                    id="inputFirstName"
                    className="form-control"
                    placeholder="Имя"
                    required
                  />

                  <label for="inputLastName">Введите фамилию:</label>
                  <input
                    type="text"
                    id="inputLastName"
                    className="form-control"
                    placeholder="Фамилия"
                    required
                  />

                  <label for="inputEmail">
                    Введите email
                    <br />
                    (далее Ваш логин):
                  </label>
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="col passwordCol">
                  <label for="inputPassword">Введите пароль:</label>
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Пароль"
                    required
                  />

                  <label for="inputPasswordCheck">Подтвердите пароль:</label>
                  <input
                    type="password"
                    id="inputPasswordCheck"
                    className="form-control"
                    placeholder="Подтвердите пароль"
                    required
                  />
                </div>
              </div>

              <button
                className="btn btn-lg btn-primary btn-block btn-signin"
                type="submit"
              >
                Зарегистрироваться
              </button>
              <a href="#" className="link_toLogin">
                Есть аккаунт? Войдите
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
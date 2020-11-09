import React from "react";

import "./RegistrationForm.css";

class RegistrationForm extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="card card-container">
          <img
            id="profile-img"
            class="profile-img-card"
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          />
          <p id="profile-name" class="profile-name-card">
            Регистрация
          </p>
          <div class="container">
            <form class="form-signin" action="submit">
              <div class="row">
                <div class="col ">
                  <label for="inputFirstName">Введите имя:</label>
                  <input
                    type="text"
                    id="inputFirstName"
                    class="form-control"
                    placeholder="Имя"
                    required
                  />

                  <label for="inputLastName">Введите фамилию:</label>
                  <input
                    type="text"
                    id="inputLastName"
                    class="form-control"
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
                    class="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="col passwordCol">
                  <label for="inputPassword">Введите пароль:</label>
                  <input
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Пароль"
                    required
                  />

                  <label for="inputPasswordCheck">Подтвердите пароль:</label>
                  <input
                    type="password"
                    id="inputPasswordCheck"
                    class="form-control"
                    placeholder="Подтвердите пароль"
                    required
                  />
                </div>
              </div>

              <button
                class="btn btn-lg btn-primary btn-block btn-signin"
                type="submit"
              >
                Зарегистрироваться
              </button>
              <a href="#" class="link_toLogin">
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
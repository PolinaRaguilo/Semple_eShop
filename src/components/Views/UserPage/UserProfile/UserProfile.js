import React from 'react';

import './UserProfile.css';

class UserProfile extends React.Component {
  render() {
    return (
      <div className="container">
        <img
          id="profile-img"
          className="profile-img-card"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/600px-User_icon_2.svg.png"
          alt="UserImg"
        />
        <h4 className="profile_title">Профиль</h4>
        <button type="button" className="btn btn-outline-primary btn_edit">
          Редактировать профиль
        </button>
        <table className="table profile_table">
          <tbody>
            <tr>
              <td>
                <b>Имя</b>
              </td>
              <td>Полина</td>
            </tr>
            <tr>
              <td>
                <b>Фамилия</b>
              </td>
              <td>Рагило</td>
            </tr>
            <tr>
              <td>
                <b>Email</b>
              </td>
              <td>polina2020@mail.ru</td>
            </tr>
          </tbody>
        </table>
        <div className="btns">
          <button type="button" claclassNamess="btn btn-outline-primary btn_editPsw">
            Изменить пароль
          </button>
          <button type="button" className="btn btn-outline-primary btn_deleteProfile">
            Удалить профиль
          </button>
        </div>
      </div>
    );
  }
}

export default UserProfile;

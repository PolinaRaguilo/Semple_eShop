import React from 'react';

import './UserItem.css';

class UserItem extends React.Component{

  render(){

    return (
      <tr>
        <td scope="row" class="font-weight-normal">
          Иван
        </td>
        <td>Иванов</td>
        <td>ivan@mail.ru</td>
        <td>
          <button type="button" class="btn btn-primary btn_delete">
            Удалить
          </button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
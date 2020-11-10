import React from 'react';

import './UserItem.css';

class UserItem extends React.Component{

  render(){

    const {key, firstName, lastName, email} = this.props;

    return (
      <tr key={key}>
        <td >
          {firstName}
        </td>
        <td>{lastName}</td>
        <td>{email}</td>
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
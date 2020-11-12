import React from "react";

import "./UserItem.css";

class UserItem extends React.Component {
  render() {
    const {  firstName, lastName, email, onDeleteUser } = this.props;

    return (
      <tr >
        <td> {firstName} </td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary btn_delete"
            onClick={onDeleteUser}
          >
            Удалить
          </button>
        </td>
      </tr>
    );
  }
}

export default UserItem;

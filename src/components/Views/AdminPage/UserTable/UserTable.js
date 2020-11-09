import React from "react";
import UserItem from "./UserItem/UserItem";

class UserTable extends React.Component {
  render() {
    return (
      <table class="container table table-hover">
        <thead class="table-warning">
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Фамилия</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <UserItem/>
          <UserItem/>
        </tbody>
      </table>
    );
  }
}


export default UserTable;
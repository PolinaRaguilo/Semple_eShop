import React from "react";
import UserItem from "./UserItem/UserItem";

const UserTable =({usersData}) =>  {

  let users = usersData.map((item) => {
    const {id, firstName, lastName, email} = item;
    return <UserItem key={id} firstName={firstName} lastName={lastName} email={email}/>
  })

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
          {users}
        </tbody>
      </table>
    );
  }



export default UserTable;
import React from "react";
import UserItem from "./UserItem/UserItem";

import './UserTable.css'

const UserTable =({usersData,onDelete}) =>  {

  let users = usersData.map((item) => {
    const {id, firstName, lastName, email} = item;
    return <UserItem key={id} id={id} firstName={firstName} lastName={lastName} email={email} onDelete={()=>onDelete(id)}/>
  })

    return (
      <table className="container table table-hover">
        <thead className="table-warning">
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
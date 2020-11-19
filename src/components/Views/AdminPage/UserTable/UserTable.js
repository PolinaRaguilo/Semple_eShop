import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem/UserItem';

import './UserTable.css';

const UserTable = ({ usersData, onDeleteUser }) => {
  const users = usersData.map(item => {
    const { id, firstName, lastName, email } = item;
    return (
      <UserItem
        key={id}
        id={id}
        firstName={firstName}
        lastName={lastName}
        email={email}
        onDeleteUser={() => {
          onDeleteUser(id);
        }}
      />
    );
  });

  return (
    <table className="container table table-hover">
      <thead className="table-warning">
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Email</th>
          <th scope="col">Удалить?</th>
        </tr>
      </thead>
      <tbody>{users}</tbody>
    </table>
  );
};

UserTable.propTypes = {
  usersData: PropTypes.array,
  onDeleteUser: PropTypes.func,
};
UserTable.defaultProps = {
  usersData: [],
  onDeleteUser: () => {},
};
export default UserTable;

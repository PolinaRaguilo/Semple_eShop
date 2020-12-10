import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserItem from './UserItem/UserItem';

import './UserTable.css';

const UserTable = ({ usersData }) => {
  const users = usersData.map(item => {
    const { id, firstName, lastName, email } = item;
    return <UserItem key={id} id={id} firstName={firstName} lastName={lastName} email={email} />;
  });

  return (
    <table className="container table table-hover">
      <thead className="table-warning">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Delete?</th>
        </tr>
      </thead>
      <tbody>{users}</tbody>
    </table>
  );
};

const mapStateToProps = state => {
  return {
    usersData: state.usersReducer,
  };
};

UserTable.propTypes = {
  usersData: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(UserTable);

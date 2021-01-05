import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserItem from './UserItem/UserItem';

import './UserTable.css';
import Spinner from '../../../Spinner/Spinner';
import ErrorLoading from '../../../ErrorLoading/ErrorLoading';

const UserTable = ({ usersData, onLoading, onErrorUsers }) => {
  const users = usersData.map(item => {
    const { id, firstName, lastName, email, requestDelete } = item;
    return (
      <UserItem
        key={id}
        id={id}
        firstName={firstName}
        lastName={lastName}
        email={email}
        requestDelete={requestDelete}
      />
    );
  });

  if (onLoading) {
    return <Spinner />;
  }
  if (onErrorUsers) {
    return <ErrorLoading />;
  }

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
    usersData: state.usersReducer.usersAdmin,
    onLoading: state.usersReducer.loading,
    onErrorUsers: state.usersReducer.error,
  };
};

UserTable.propTypes = {
  usersData: PropTypes.array.isRequired,
  onLoading: PropTypes.bool.isRequired,
  onErrorUsers: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(UserTable);

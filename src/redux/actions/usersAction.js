import UsersService from '../../Services/UsersService';

const dbUsers = new UsersService();

const receivedUsers = users => {
  return {
    type: 'USERS/RECEIEVE_USERS',
    users,
  };
};

const requestUsers = () => {
  return {
    type: 'USERS/REQUEST_USERS',
  };
};

const failLoadUsers = error => {
  return {
    type: 'USERS/FAIL_LOAD',
    error,
  };
};

export const fetchUsers = () => async dispatch => {
  dispatch(requestUsers());
  try {
    await dbUsers.getAllUsers().on('value', snapshot => {
      dispatch(receivedUsers(Object.values(snapshot.val())));
    });
  } catch (error) {
    dispatch(failLoadUsers(error));
  }
};

export const deleteUser = id => {
  return {
    type: 'DELETE_USERS',
    id,
  };
};

import Axios from 'axios';

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
    const response = await Axios.get('/users.json');
    dispatch(receivedUsers(response.data));
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

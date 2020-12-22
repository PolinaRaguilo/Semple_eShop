// import Axios from 'axios';
import fbDB from '../../config/fbConfig';

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
    await fbDB.child('users').on('value', snapshot => {
      dispatch(receivedUsers(snapshot.val()));
      console.log(snapshot.val());
    });

    // const response = await Axios.get('/users');
    // dispatch(receivedUsers(response.data));
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

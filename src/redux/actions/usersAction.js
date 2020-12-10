/* eslint-disable */

export const fetchUsers = () => async dispatch => {
  //dispatch(requestUsers());
  try {
    const response = await fetch('/users.json');
    const users = await response.json();
    console.log(users);
    dispatch(receiveUsers(users));
  } catch (error) {
    //dispatch(failLoadUsers(error));
  }
};

const receiveUsers = users => {
  return {
    type: 'USERS/RECEIEVE_USERS',
    users,
  };
};

export const deleteUser = id => {
  return {
    type: 'DELETE_USERS',
    id,
  };
};

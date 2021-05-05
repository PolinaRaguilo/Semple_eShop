import { nanoid } from 'nanoid';
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

export const deleteRequest = id => async dispatch => {
  await dbUsers.updateUser({ requestDelete: true }, id);
  dispatch(fetchUsers());
};

export const deleteUser = id => async dispatch => {
  await dbUsers.deleteUser(id).then(() => {
    dispatch(fetchUsers());
  });
};

export const addNewUser = (firstName, lastName, email) => async dispatch => {
  const newUser = {
    id: nanoid(3),
    firstName,
    lastName,
    email,
    requestDelete: false,
    imgUrl: '',
    cart: '',
  };
  await dbUsers.addNewUser(newUser).then(() => {
    dispatch(fetchUsers());
  });
};

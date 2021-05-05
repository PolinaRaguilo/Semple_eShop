import UsersService from '../../Services/UsersService';
import { fetchUsers } from './usersAction';

const dbUser = new UsersService();

export const openEditProfile = () => {
  return {
    type: 'EDIT/OPEN',
  };
};

export const closeEditProfile = () => {
  return {
    type: 'EDIT/CLOSE',
  };
};

export const updateInf = (id, newName, newSurname) => async dispatch => {
  await dbUser.updateUser({ firstName: newName, lastName: newSurname }, id).then(() => {
    dispatch(fetchUsers());
  });
};

export const updateImg = (id, imageUrl) => async dispatch => {
  await dbUser.updateUser({ imgUrl: imageUrl }, id).then(() => {
    dispatch(fetchUsers());
  });
};

export const updateCart = (id, cartData) => async dispatch => {
  await dbUser.updateUser({ cart: cartData }, id).then(() => {
    dispatch(fetchUsers());
  });
};

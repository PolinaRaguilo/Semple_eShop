import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { clocksReducer } from './clocksReducer';
import { modalReducer } from './modalReducer';
import { cartReducer } from './cartReducer';
import { authorizationReducer } from './authorizationReducer';

const mainReducer = combineReducers({
  usersReducer,
  clocksReducer,
  modalReducer,
  cartReducer,
  authorizationReducer,
});

export default mainReducer;

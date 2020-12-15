import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { clocksReducer } from './clocksReducer';
import { modalReducer } from './modalReducer';
import { cartReducer } from './cartReducer';

const mainReducer = combineReducers({
  usersReducer,
  clocksReducer,
  modalReducer,
  cartReducer,
});

export default mainReducer;

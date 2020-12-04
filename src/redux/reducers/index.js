import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { clocksReducer } from './clocksReducer';
import { brandsReducer } from './brandsReducer';
import { modalReducer } from './modalReducer';
import { cartReducer } from './cartReducer';

const mainReducer = combineReducers({
  usersReducer,
  clocksReducer,
  brandsReducer,
  modalReducer,
  cartReducer,
});

export default mainReducer;

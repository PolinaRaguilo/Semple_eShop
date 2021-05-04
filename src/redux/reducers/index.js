import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { clocksReducer } from './clocksReducer';
import { modalReducer } from './modalReducer';
import { authorizationReducer } from './authorizationReducer';
import { profileReducer } from './profileReducer';

const mainReducer = combineReducers({
  usersReducer,
  clocksReducer,
  modalReducer,
  authorizationReducer,
  profileReducer,
});

export default mainReducer;

/* eslint-disable class-methods-use-this */
import fbDB from '../config/fbConfig';

const db = fbDB.ref('/users');

class UsersService {
  getAllUsers() {
    return db;
  }

  deleteUser(key) {
    return db.child(key).remove();
  }

  updateUser(value, key) {
    return db.child(key).update(value);
  }
}

export default UsersService;

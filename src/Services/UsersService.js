/* eslint-disable class-methods-use-this */
import fbDatabase from '../config/fbConfig';

const db = fbDatabase.database().ref('/users');

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

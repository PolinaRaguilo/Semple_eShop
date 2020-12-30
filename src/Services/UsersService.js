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
}

export default UsersService;

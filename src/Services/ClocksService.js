/* eslint-disable class-methods-use-this */
import fbDB from '../config/fbConfig';

const db = fbDB.ref('/clocks');

class ClocksService {
  getAllClocks() {
    return db;
  }

  addNewClock(clock) {
    return db.child('193').set(clock);
    // return db.push(clock);
  }

  delete(key) {
    return db.child(key).remove();
  }
}

export default ClocksService;

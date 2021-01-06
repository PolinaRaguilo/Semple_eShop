/* eslint-disable class-methods-use-this */
import fbDatabase from '../config/fbConfig';

const db = fbDatabase.database().ref('/clocks');

class ClocksService {
  getAllClocks() {
    return db;
  }

  addNewClock(clock) {
    return db.child(clock.id).set(clock);
  }

  deleteClock(key) {
    return db.child(key).remove();
  }

  updateClock(value, key) {
    return db.child(key).update(value);
  }
}

export default ClocksService;

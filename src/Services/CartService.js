/* eslint-disable class-methods-use-this */
import fbDatabase from '../config/fbConfig';

const db = fbDatabase.database().ref('/users');

class CartService {
  getCart(key) {
    return db.child(key).child('cart');
  }
}

export default CartService;

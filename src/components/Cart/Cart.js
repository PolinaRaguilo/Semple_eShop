import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';
import OneItemCart from './OneItemCart/OneItemCart';

class Cart extends React.Component {
  render() {
    const { onCloseModal, isOpen, cartItems, total, deleteItemsCart } = this.props;
    const clocksForCart = cartItems.map(item => {
      const { id, imageClock, brandClock, vendorCode, price } = item;
      return (
        <table className="table table-hover">
          <tbody>
            <OneItemCart
              id={id}
              imageClock={imageClock}
              brandClock={brandClock}
              vendorCode={vendorCode}
              price={price}
              deleteItemsCart={deleteItemsCart}
            />
          </tbody>
        </table>
      );
    });
    const totalPrice = cartItems.reduce((summa, item) => {
      return summa + total + item.price;
    }, 0);

    if (isOpen === true) {
      return (
        <div className="modal show">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Your cart</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={onCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {cartItems.length === 0 ? (
                  <div className="empty-cart-wrapper">
                    <i className="fas fa-shopping-cart i-cart" />
                    <p className="empty">Your cart is empty</p>
                  </div>
                ) : (
                  clocksForCart
                )}
              </div>
              <div className="modal-footer">
                <p className="total-title">Total: {totalPrice}$</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={onCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

Cart.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  cartItems: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  deleteItemsCart: PropTypes.func.isRequired,
};

export default Cart;

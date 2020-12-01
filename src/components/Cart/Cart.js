import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';
import OneItemCart from './OneItemCart/OneItemCart';

class Cart extends React.Component {
  render() {
    const { onCloseModal, isOpen, cartItems, total } = this.props;
    const clocksForCart = cartItems.map(item => {
      const { imageClock, brandClock, vendorCode, price } = item;
      return (
        <OneItemCart
          imageClock={imageClock}
          brandClock={brandClock}
          vendorCode={vendorCode}
          price={price}
        />
      );
    });
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
                <table className="table table-hover">
                  <tbody>{clocksForCart}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <p className="total-title">Total: {total}$</p>
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
};

export default Cart;

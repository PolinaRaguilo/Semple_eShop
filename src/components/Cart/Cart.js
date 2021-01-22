import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Cart.css';

import OneItemCart from './OneItemCart/OneItemCart';
import { onCloseModal } from '../../redux/actions/modalActions';

class Cart extends React.Component {
  render() {
    const { isOpen, cartItems } = this.props;
    const clocksForCart = cartItems.map(item => {
      const { id, imageClock, brandClock, price, count } = item;
      return (
        <table className="table table-hover">
          <tbody>
            <OneItemCart
              id={id}
              imageClock={imageClock}
              brandClock={brandClock}
              price={price}
              count={count}
            />
          </tbody>
        </table>
      );
    });
    const total = 0;
    const totalPrice = cartItems.reduce((summa, item) => {
      return summa + total + item.price * item.count;
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
                  onClick={this.props.onCloseModal}
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
                  onClick={this.props.onCloseModal}
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

const mapStateToProps = state => {
  return {
    isOpen: state.modalReducer.openModal,
    cartItems: state.cartReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseModal: () => dispatch(onCloseModal()),
  };
};

Cart.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  cartItems: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

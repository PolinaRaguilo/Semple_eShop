import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Cart.css';

import OneItemCart from './OneItemCart/OneItemCart';
import { onCloseModal } from '../../redux/actions/modalActions';

class Cart extends React.Component {
  render() {
    const cartsFromLocal = JSON.parse(localStorage.getItem('cartsUsers'));
    const cartOfCurrent =
      this.props.currentUser === null ? [] : cartsFromLocal[`cart-${this.props.currentUser}`];

    const clocksForCart =
      cartOfCurrent === undefined
        ? []
        : cartOfCurrent.map(item => {
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

    const totalPrice = cartOfCurrent.reduce((summa, item) => {
      return summa + total + item.price * item.count;
    }, 0);

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
              {cartOfCurrent.length === 0 ? (
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
}

const mapStateToProps = state => {
  return {
    currentUser: state.authorizationReducer.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseModal: () => dispatch(onCloseModal()),
  };
};

Cart.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

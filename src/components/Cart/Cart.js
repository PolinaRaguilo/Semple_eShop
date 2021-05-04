/* eslint-disable prefer-const */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Cart.css';

import OneItemCart from './OneItemCart/OneItemCart';
import { onCloseModal } from '../../redux/actions/modalActions';

class Cart extends React.Component {
  FromLocal = JSON.parse(localStorage.getItem('cartsUsers'));

  cartCurrent =
    this.props.currentUser === null ? [] : this.FromLocal[`cart-${this.props.currentUser}`];

  state = {
    itemsCart: this.cartCurrent,
  };

  AddToCart = idClock => {
    const cartsFromLocal = JSON.parse(localStorage.getItem('cartsUsers'));

    const cartOfCurrent =
      this.props.currentUser === null ? [] : cartsFromLocal[`cart-${this.props.currentUser}`];

    let newClockCart;
    let newCart;
    let newAllCart;
    const clock = this.props.dataClocks.find(item => item.id === idClock);
    const { id, imageClock, brandClock, vendorCode, price } = clock;
    const itemIndex = cartOfCurrent.findIndex(item => item.id === id);
    const clockItem = cartOfCurrent[itemIndex];
    if (clockItem !== undefined) {
      newClockCart = {
        ...clockItem,
        count: clockItem.count + 1,
      };
    } else {
      newClockCart = {
        id,
        imageClock,
        brandClock,
        vendorCode,
        price,
        count: 1,
      };
    }
    if (itemIndex < 0) {
      newCart = [...cartOfCurrent, newClockCart];
    } else {
      newCart = [
        ...cartOfCurrent.slice(0, itemIndex),
        newClockCart,
        ...cartOfCurrent.slice(itemIndex + 1),
      ];
    }
    newAllCart = {
      ...cartsFromLocal,
      [`cart-${localStorage.getItem('currUser')}`]: newCart,
    };
    localStorage.setItem('cartsUsers', JSON.stringify(newAllCart));
    this.setState({ itemsCart: newCart });
  };

  deleteItemsCart = id => {
    let newCart;
    let newAllCart;
    const cartsFromLocal = JSON.parse(localStorage.getItem('cartsUsers'));

    const cartOfCurrent =
      this.props.currentUser === null ? [] : cartsFromLocal[`cart-${this.props.currentUser}`];
    newCart = cartOfCurrent.filter(item => item.id !== id);
    newAllCart = { ...cartsFromLocal, [`cart-${localStorage.getItem('currUser')}`]: newCart };
    localStorage.setItem('cartsUsers', JSON.stringify(newAllCart));

    // eslint-disable-next-line react/no-access-state-in-setstate
    const afterDel = this.state.itemsCart.filter(item => item.id !== id);
    this.setState({ itemsCart: afterDel });
  };

  decreaseOne = id => {
    const cartsFromLocal = JSON.parse(localStorage.getItem('cartsUsers'));

    const cartOfCurrent =
      this.props.currentUser === null ? [] : cartsFromLocal[`cart-${this.props.currentUser}`];
    let newCart;
    let newAllCart;

    const itemIndex = cartOfCurrent.findIndex(item => item.id === id);
    const clockItem = cartOfCurrent[itemIndex];
    let updateClock = {
      ...clockItem,
      count: clockItem.count - 1,
    };
    if (clockItem.count === 1) {
      newCart = [...cartOfCurrent.slice(0, itemIndex), ...cartOfCurrent.slice(itemIndex + 1)];
    } else {
      newCart = [
        ...cartOfCurrent.slice(0, itemIndex),
        updateClock,
        ...cartOfCurrent.slice(itemIndex + 1),
      ];
    }
    newAllCart = { ...cartsFromLocal, [`cart-${localStorage.getItem('currUser')}`]: newCart };
    localStorage.setItem('cartsUsers', JSON.stringify(newAllCart));
    this.setState({ itemsCart: newCart });
  };

  render() {
    const clocksForCart =
      this.state.itemsCart === undefined
        ? []
        : this.state.itemsCart.map(item => {
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
                    deleteItemsCart={this.deleteItemsCart}
                    addOneClock={this.AddToCart}
                    deleteOneItem={this.decreaseOne}
                  />
                </tbody>
              </table>
            );
          });
    const total = 0;

    const totalPrice = this.state.itemsCart.reduce((summa, item) => {
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
              {this.state.itemsCart.length === 0 ? (
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
    dataClocks: state.clocksReducer.clocksData,
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
  dataClocks: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

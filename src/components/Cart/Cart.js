/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Cart.css';

import OneItemCart from './OneItemCart/OneItemCart';
import { onCloseModal } from '../../redux/actions/modalActions';
import { updateCart } from '../../redux/actions/profileActions';

class Cart extends React.Component {
  user = this.props.users.find(item => item.email === this.props.currentUser);

  userCart = this.user.cart;

  convertCart = this.userCart === '' ? [] : this.userCart;

  state = {
    itemsCart: this.convertCart,
  };

  AddToCart = idClock => {
    const user = this.props.users.find(item => item.email === this.props.currentUser);
    const userCart = user.cart;
    const convertCart = userCart === '' ? [] : userCart;

    let newClockCart;
    let newCart;
    const clock = this.props.dataClocks.find(item => item.id === idClock);
    const { id, imageClock, brandClock, vendorCode, price } = clock;

    const itemIndex = convertCart.findIndex(item => item.id === id);

    const clockItem = convertCart[itemIndex];
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
      newCart = [...convertCart, newClockCart];
    } else {
      newCart = [
        ...convertCart.slice(0, itemIndex),
        newClockCart,
        ...convertCart.slice(itemIndex + 1),
      ];
    }
    this.props.updateCart(user.id, newCart);
    this.setState({ itemsCart: newCart });
  };

  deleteItemsCart = id => {
    const user = this.props.users.find(item => item.email === this.props.currentUser);
    const userCart = user.cart;
    const convertCart = userCart === '' ? [] : userCart;
    let newCart;

    newCart = convertCart.filter(item => item.id !== id);

    let newCartItems = newCart.length === 0 ? '' : newCart;

    this.props.updateCart(user.id, newCartItems);
    this.setState({ itemsCart: newCartItems });
  };

  decreaseOne = id => {
    const user = this.props.users.find(item => item.email === this.props.currentUser);
    const userCart = user.cart;
    const convertCart = userCart === '' ? [] : userCart;
    let newCart;

    const itemIndex = convertCart.findIndex(item => item.id === id);
    const clockItem = convertCart[itemIndex];
    let updateClock = {
      ...clockItem,
      count: clockItem.count - 1,
    };
    if (clockItem.count === 1) {
      newCart = [...convertCart.slice(0, itemIndex), ...convertCart.slice(itemIndex + 1)];
    } else {
      newCart = [
        ...convertCart.slice(0, itemIndex),
        updateClock,
        ...convertCart.slice(itemIndex + 1),
      ];
    }
    let newCartItems = newCart.length === 0 ? '' : newCart;
    this.props.updateCart(user.id, newCartItems);
    this.setState({ itemsCart: newCart });
  };

  render() {
    const clocksForCart = this.state.itemsCart.map(item => {
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
    users: state.usersReducer.usersAdmin,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseModal: () => dispatch(onCloseModal()),
    updateCart: (id, cartData) => dispatch(updateCart(id, cartData)),
  };
};

Cart.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired,
  dataClocks: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

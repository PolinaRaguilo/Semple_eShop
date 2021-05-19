/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';
import { Link, withRouter } from 'react-router-dom';
import { onOpenModal } from '../../redux/actions/modalActions';
import { adminLogout, userLogout } from '../../redux/actions/authorizationAction';
import { fbDatabase } from '../../config/fbConfig';
import Cart from '../Cart/Cart';

class Header extends Component {
  onLogOutHandler = () => {
    this.props.history.push('/');
    localStorage.setItem('currUser', '');
    this.props.onLogOutUser();
    this.props.onLogOutAdmin();
    fbDatabase.auth().signOut();
  };

  render() {
    if (this.props.logged || this.props.showAdmin) {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link to="/items" className="navbar-brand">
            eShop
          </Link>
          <div className=" navbar-collapse  nav-menu-wrapper" />
          <div className="icons-wrapper">
            <Link to="/user" className="link-user">
              <i className="far fa-user-circle" />
            </Link>
            {this.props.showAdmin === false && (
              <button type="button" className="btn-cart" onClick={this.props.onOpenModal}>
                <i className="cart-icon fa fa-shopping-cart" />
              </button>
            )}

            <button type="button" className="btn-out" onClick={this.onLogOutHandler}>
              <i className="fas fa-sign-out-alt" />
            </button>
          </div>
          {this.props.isOpen && <Cart />}
        </nav>
      );
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/items" className="navbar-brand">
          eShop
        </Link>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.modalReducer.openModal,
    showAdmin: state.authorizationReducer.showAdmin,
    logged: state.authorizationReducer.logged,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOpenModal: () => dispatch(onOpenModal()),
    onLogOutUser: () => dispatch(userLogout()),
    onLogOutAdmin: () => dispatch(adminLogout()),
  };
};

Header.propTypes = {
  onOpenModal: PropTypes.func.isRequired,

  isOpen: PropTypes.bool.isRequired,
  onLogOutUser: PropTypes.func.isRequired,
  onLogOutAdmin: PropTypes.func.isRequired,
  showAdmin: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));

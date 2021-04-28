import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';
import { Link } from 'react-router-dom';
import { onOpenModal } from '../../redux/actions/modalActions';
import { adminLogout, userLogout } from '../../redux/actions/authorizationAction';
import fbDatabase from '../../config/fbConfig';

class Header extends Component {
  onLogOutHandler = () => {
    localStorage.removeItem('currentUser');

    this.props.onLogOutUser();
    this.props.onLogOutAdmin();
    fbDatabase.auth().signOut();
  };

  render() {
    if (localStorage.getItem('currentUser') === null) {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link to="/items" className="navbar-brand">
            eShop
          </Link>
        </nav>
      );
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/items" className="navbar-brand">
          eShop
        </Link>
        <div className=" navbar-collapse  nav-menu-wrapper">
          <ul className="navbar-nav align-items-between">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Delivery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="icons-wrapper">
          <Link to="/user" className="link-user">
            <i className="far fa-user-circle" />
          </Link>

          {!this.props.showAdmin && (
            <button type="button" className="btn-cart" onClick={this.props.onOpenModal}>
              <i className="cart-icon fa fa-shopping-cart" />
            </button>
          )}

          <button type="button" className="btn-out" onClick={this.onLogOutHandler}>
            <i className="fas fa-sign-out-alt" />
          </button>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    logged: state.authorizationReducer.logged,
    showAdmin: state.authorizationReducer.showAdmin,
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
  onLogOutUser: PropTypes.func.isRequired,
  onLogOutAdmin: PropTypes.func.isRequired,
  // logged: PropTypes.bool.isRequired,
  showAdmin: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

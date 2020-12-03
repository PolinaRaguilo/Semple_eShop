import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';
import { Link } from 'react-router-dom';
import { onOpenModal } from '../../redux/actions/modalActions';

class Header extends Component {
  render() {
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
            <li className="nav-item">
              <Link to="/admin" className="nav-link" href="#">
                Admin
              </Link>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-danger" onClick={this.props.toogle}>
          Переключить
        </button>
        <div className="icons-wrapper">
          <Link to="/user" className="link-user">
            <i className="far fa-user-circle" />
          </Link>
          <button type="button" className="btn-cart" onClick={this.props.onOpenModal}>
            <i className="cart-icon fa fa-shopping-cart" />
          </button>
          <i className="fas fa-sign-out-alt" />
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOpenModal: () => dispatch(onOpenModal()),
  };
};

Header.propTypes = {
  toogle: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);

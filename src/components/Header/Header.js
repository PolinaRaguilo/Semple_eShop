import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';
import { Link } from 'react-router-dom';
import { onOpenModal } from '../../redux/actions/modalActions';
import { fetchUsers } from '../../redux/actions/usersAction';
import { fetchClocks } from '../../redux/actions/clocksActions';
import { userLogout } from '../../redux/actions/authorizationAction';

class Header extends Component {
  componentDidMount = () => {
    this.props.getUsers();
    this.props.getClocks();
  };

  onLogOutHandler = () => {
    this.props.onLogOut();
  };

  render() {
    if (this.props.logged) {
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
            <button type="button" className="btn-out" onClick={this.onLogOutHandler}>
              <i className="fas fa-sign-out-alt" />
            </button>
          </div>
        </nav>
      );
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/items" className="navbar-brand">
          eShop
        </Link>
        <button type="button" className="btn btn-danger" onClick={this.props.toogle}>
          Переключить
        </button>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    logged: state.authorizationReducer.logged,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOpenModal: () => dispatch(onOpenModal()),
    getUsers: () => dispatch(fetchUsers()),
    getClocks: () => dispatch(fetchClocks()),
    onLogOut: () => dispatch(userLogout()),
  };
};

Header.propTypes = {
  toogle: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  getClocks: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

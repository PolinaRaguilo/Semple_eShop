import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          eShop
        </a>
        <div className=" navbar-collapse  nav-menu-wrapper">
          <ul className="navbar-nav align-items-between">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Главная
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Доставка
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                О нас
              </a>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-danger" onClick={this.props.toogle}>
          Переключить
        </button>
        <div className="icons-wrapper">
          <i className="far fa-user-circle" />
          <i className="cart-icon fa fa-shopping-cart" />
          <i className="fas fa-sign-out-alt" />
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  toogle: PropTypes.func,
};

Header.defaultProps = {
  toogle: () => {},
};

export default Header;

import React from 'react';
import './Header.css'

const Header = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#">eShop</a>
    <div className="collapse navbar-collapse justify-content-around nav-menu-wrapper" id="navbarColor01">
      <ul className="navbar-nav align-items-between">
        <li className="nav-item active">
          <a className="nav-link" href="#">Главная</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Доставка</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">О нас</a>
        </li>
      </ul>
    </div>
    <div className="icons-wrapper">
      <i className="far fa-user-circle"></i>
      <i className="cart-icon fa fa-shopping-cart"></i>
      <i className="fas fa-sign-out-alt"></i>
    </div>
</nav>
  )
}

export default Header;
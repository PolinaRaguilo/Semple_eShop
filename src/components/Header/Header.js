import React from 'react';
import './Header.css'

const Header = () => {
  return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">eShop</a>
    <div class="collapse navbar-collapse justify-content-around nav-menu-wrapper" id="navbarColor01">
      <ul class="navbar-nav align-items-between">
        <li class="nav-item active">
          <a class="nav-link" href="#">Главная</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Доставка</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">О нас</a>
        </li>
      </ul>
    </div>
    <div class="icons-wrapper">
      <i class="far fa-user-circle"></i>
      <i class="cart-icon fa fa-shopping-cart"></i>
      <i class="fas fa-sign-out-alt"></i>
    </div>
</nav>
  )
}

export default Header;
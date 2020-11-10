import React from 'react';

class OneItem extends React.Component{

  render(){
    const {id, imageClock, collection, vendorCode, price} = this.props;

    return (
      <div class="col-4" key={id}>
        <div class=" product">
          <a href="#">
            <img
              src={imageClock}
              alt=""
              class="product-img"
            />
          </a>
          <p class="product-title">
            <a href="#">Коллекция: {collection}</a>
          </p>
          <p class="product-desc">Артикул: {vendorCode}</p>
          <p class="product-price">Цена: ${price}</p>
          <button type="button" class="btn btn-primary btn_toCart">
            В корзину
          </button>
        </div>
      </div>
    );
  }
}


export default OneItem;
import React from 'react';

class OneItem extends React.Component{

  render(){
    const {id, imageClock,brandClock, collection, vendorCode, price} = this.props;

    return (
      <div className="col-4" key={id}>
        <div className=" product">
          <a href="#">
            <img
              src={imageClock}
              alt=""
              className="product-img"
            />
          </a>
          <p className="product-title">
            <a href="#">Часы: {brandClock}</a>
          </p>
          <p className="product-collection">Коллекция: {collection}</p>
          <p className="product-vendor">Артикул: {vendorCode}</p>
          <p className="product-price">Цена: ${price}</p>
          <button type="button" className="btn btn-primary btn_toCart">
            В корзину
          </button>
        </div>
      </div>
    );
  }
}


export default OneItem;
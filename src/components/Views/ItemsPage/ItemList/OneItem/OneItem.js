import React from 'react';

class OneItem extends React.Component{

  render(){
    return (
      <div class="col-4">
        <div class=" product">
          <a href="#">
            <img
              src="https://ziko.by/upload/iblock/66a/66ab640a1af2333386f89e2c50089e5e.png"
              alt=""
              class="product-img"
            />
          </a>
          <p class="product-title">
            <a href="#">Title</a>
          </p>
          <p class="product-desc">Description</p>
          <p class="product-price">Price: $100</p>
          <button type="button" class="btn btn-primary btn_toCart">
            В корзину
          </button>
        </div>
      </div>
    );
  }
}


export default OneItem;
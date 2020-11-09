import React from 'react';

class OneItem extends React.Component{

  render(){
    return (
      <div class="col-4">
        <div class=" product">
          <a href="#">
            <img
              src="https://ziko.by/upload/resize_cache/iblock/120/500_500_140cd750bba9870f18aada2478b24840a/1205acf653a970c5f8296e8337c2fd3e.png"
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
import React from 'react';
import { Rating } from '@material-ui/lab';
import PropTypes from 'prop-types';

class OneItem extends React.Component {
  render() {
    const { id, imageClock, brandClock, collection, vendorCode, price } = this.props;

    return (
      <div className="col-4" key={id}>
        <div className=" product">
          <a href="#">
            <img src={imageClock} alt="" className="product-img" />
          </a>
          <p className="product-title">
            <a href="#">Часы: {brandClock}</a>
          </p>
          <p className="product-collection">Коллекция: {collection}</p>
          <p className="product-vendor">Артикул: {vendorCode}</p>
          <p className="product-price">Цена: ${price}</p>
          <Rating defaultValue={0} precision={1} />
          <button type="button" className="btn btn-primary btn_toCart">
            В корзину
          </button>
        </div>
      </div>
    );
  }
}

OneItem.propTypes = {
  id: PropTypes.number,
  imageClock: PropTypes.string,
  brandClock: PropTypes.string,
  collection: PropTypes.string,
  vendorCode: PropTypes.string,
  price: PropTypes.number,
};

OneItem.defaultProps = {
  id: 0,
  imageClock: 'https://hellenic.property/wp-content/uploads/2018/01/No-Image.jpg',
  brandClock: 'no information',
  collection: 'no information',
  vendorCode: 'no information',
  price: 0,
};

export default OneItem;

import React from 'react';
import { Rating } from '@material-ui/lab';
import PropTypes from 'prop-types';
import './OneItem.css';

class OneItem extends React.Component {
  render() {
    const {
      id,
      imageClock,
      brandClock,
      collection,
      vendorCode,
      price,
      rating,
      addRating,
    } = this.props;

    return (
      <div className="col-4" key={id}>
        <div className=" product">
          <a href="#">
            <img src={imageClock} alt="" className="product-img" />
          </a>
          <p className="product-title">
            <a href="#">{brandClock}</a>
          </p>
          <p className="product-collection">Collection: {collection}</p>
          <p className="product-vendor">Code: {vendorCode}</p>
          <p className="product-price">Price: ${price}</p>
          <div>
            <Rating
              name="simple-controlled"
              value={rating}
              defaultValue={0}
              precision={1}
              onClick={value => {
                addRating(value);
              }}
              // onChange={newRateValue => {
              //   this.setState({ rateValue: newRateValue });
              //   console.log(this.state.rateValue);
              // }}
            />
          </div>
          <button type="button" className="btn btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

OneItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageClock: PropTypes.string.isRequired,
  brandClock: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
  vendorCode: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  addRating: PropTypes.func.isRequired,
};

export default OneItem;

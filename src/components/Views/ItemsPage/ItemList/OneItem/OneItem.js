import React from 'react';
import { Rating } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRating } from '../../../../../redux/actions/clocksActions';
import './OneItem.css';

class OneItem extends React.Component {
  onAddedToCartHandler = () => {
    this.props.onAddedToCart(this.props.id);
  };

  render() {
    const { id, imageClock, brandClock, collection, vendorCode, price, rating } = this.props;

    return (
      <div className="col-4 product">
        <a href="#">
          <img src={imageClock} alt="" className="product-img" />
        </a>
        <p className="product-title">
          <a href="#">{brandClock}</a>
        </p>
        <p className="product-collection">Collection: {collection || '-'}</p>
        <p className="product-vendor">Code: {vendorCode}</p>
        <p className="product-price">Price: ${price}</p>
        <div>
          <Rating
            name={vendorCode}
            defaultValue={rating}
            precision={1}
            onChange={newValue => {
              this.props.addRating(newValue.target.defaultValue, id);
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary add-cart"
          onClick={this.onAddedToCartHandler}
        >
          <span className="beforeClick">Add to cart</span>
          <span className="afterClick">
            Added <i className="fas fa-check" />
          </span>
        </button>
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
  onAddedToCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    addRating: (value, id) => dispatch(addRating(value, id)),
  };
};

export default connect(null, mapDispatchToProps)(OneItem);

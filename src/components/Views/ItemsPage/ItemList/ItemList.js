import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../../../../redux/actions/cartActions';
import './ItemList.css';
import OneItem from './OneItem/OneItem';

class ItemList extends React.Component {
  AddToCart = idClock => {
    const clock = this.props.dataClocks.find(item => item.id === idClock);
    const { id, imageClock, brandClock, vendorCode, price } = clock;
    this.props.onAddToCart(id, imageClock, brandClock, vendorCode, price);
  };

  render() {
    const { dataClocks, brands } = this.props;
    const clockItems = dataClocks.map(item => {
      const { id, imageClock, brandClock, collection, vendorCode, price, rating } = item;

      return (
        <OneItem
          key={id}
          id={id}
          imageClock={imageClock}
          brandClock={brandClock}
          collection={collection}
          vendorCode={vendorCode}
          price={price}
          rating={rating}
          onAddedToCart={this.AddToCart}
        />
      );
    });

    const brandsList = brands.map(item => {
      const { id, brand } = item;

      return (
        <li className="list-group-item" key={id}>
          <a href="#">{brand}</a>
        </li>
      );
    });
    return (
      <div className="content">
        <div className="row">
          <div className="col">
            <div className="list-group  ">
              <ul className="filter-menu">
                <li className="list-group-item  filter-title">Brands</li>
                {brandsList}
              </ul>
            </div>
          </div>
          <div className="col-md-8 products">
            <div className="row">{clockItems}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataClocks: state.clocksReducer,
    brands: state.brandsReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: (id, imageClock, brandClock, vendorCode, price) =>
      dispatch(addToCart(id, imageClock, brandClock, vendorCode, price)),
  };
};

ItemList.propTypes = {
  dataClocks: PropTypes.array.isRequired,
  brands: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

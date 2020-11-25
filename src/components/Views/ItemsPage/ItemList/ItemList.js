import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.css';
import OneItem from './OneItem/OneItem';

class ItemList extends React.Component {
  render() {
    const { dataClocks, brands } = this.props;
    const clockItems = dataClocks.map(item => {
      const { id, imageClock, brandClock, collection, vendorCode, price, rating } = item;

      return (
        <OneItem
          key={id}
          imageClock={imageClock}
          brandClock={brandClock}
          collection={collection}
          vendorCode={vendorCode}
          price={price}
          rating={rating}
          // addRating={addRating}
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

ItemList.propTypes = {
  dataClocks: PropTypes.array.isRequired,
  brands: PropTypes.array.isRequired,
  // addRating: PropTypes.func.isRequired,
};

export default ItemList;

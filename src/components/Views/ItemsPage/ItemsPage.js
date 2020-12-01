import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList/ItemList';

class ItemsPage extends React.Component {
  render() {
    const { data, addRating, onAddedToCart } = this.props;
    return (
      <ItemList
        dataClocks={data.clocks}
        brands={data.brands}
        addRating={addRating}
        onAddedToCart={onAddedToCart}
      />
    );
  }
}

ItemsPage.propTypes = {
  data: PropTypes.object.isRequired,
  addRating: PropTypes.func.isRequired,
  onAddedToCart: PropTypes.func.isRequired,
};

export default ItemsPage;

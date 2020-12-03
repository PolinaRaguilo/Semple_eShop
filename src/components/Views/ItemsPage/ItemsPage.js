import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList/ItemList';

class ItemsPage extends React.Component {
  render() {
    const { addRating, onAddedToCart } = this.props;
    return <ItemList addRating={addRating} onAddedToCart={onAddedToCart} />;
  }
}

ItemsPage.propTypes = {
  addRating: PropTypes.func.isRequired,
  onAddedToCart: PropTypes.func.isRequired,
};

export default ItemsPage;

import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList/ItemList';

class ItemsPage extends React.Component {
  render() {
    const { data, addRating } = this.props;
    return <ItemList dataClocks={data.clocks} brands={data.brands} addRating={addRating} />;
  }
}

ItemsPage.propTypes = {
  data: PropTypes.object.isRequired,
  addRating: PropTypes.func.isRequired,
};

export default ItemsPage;

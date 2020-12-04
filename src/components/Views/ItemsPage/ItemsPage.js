import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList/ItemList';

class ItemsPage extends React.Component {
  render() {
    const { addRating } = this.props;
    return <ItemList addRating={addRating} />;
  }
}

ItemsPage.propTypes = {
  addRating: PropTypes.func.isRequired,
};

export default ItemsPage;

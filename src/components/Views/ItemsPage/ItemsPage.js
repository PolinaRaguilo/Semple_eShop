import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header/Header';
import ItemList from './ItemList/ItemList';

class ItemsPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <Header />
        <ItemList data={data.clocks} brands={data.brands} />
      </>
    );
  }
}

ItemsPage.propTypes = {
  data: PropTypes.array,
};

ItemsPage.defaultProps = {
  data: [],
};

export default ItemsPage;

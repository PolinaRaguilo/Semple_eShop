import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ItemList from './ItemList/ItemList';

class ItemsPage extends React.Component {
  render() {
    const { data } = this.props;
    if (data.showAdmin === false) {
      return (
        <>
          <ItemList data={data.clocks} brands={data.brands} />
        </>
      );
    }
    return <Redirect to="/admin" />;
  }
}

ItemsPage.propTypes = {
  data: PropTypes.object,
};

ItemsPage.defaultProps = {
  data: {},
};

export default ItemsPage;

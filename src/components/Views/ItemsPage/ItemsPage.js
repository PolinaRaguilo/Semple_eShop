import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import ItemList from './ItemList/ItemList';
import { fetchClocks } from '../../../redux/actions/clocksActions';

class ItemsPage extends React.Component {
  componentDidMount = () => {
    this.props.getClocks();
  };

  render() {
    return <ItemList />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getClocks: () => dispatch(fetchClocks()),
  };
};

ItemsPage.propTypes = {
  getClocks: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ItemsPage);

import React from 'react';
import PropTypes from 'prop-types';

import './OneClockItemForAdmin.css';
import { connect } from 'react-redux';
import { deleteItemAdmin } from '../../../../../redux/actions/clocksActions';

class OneClockItemForAdmin extends React.Component {
  onDeleteClockHandler = () => {
    this.props.onDeleteClock(this.props.id);
  };

  render() {
    const { id, imageClock, brandClock, collection, vendorCode, price, rating } = this.props;

    return (
      <tr>
        <td>{id}</td>
        <td>
          <img src={imageClock} alt="img" className="clock-img" />
        </td>
        <td>{brandClock}</td>
        <td>{collection}</td>
        <td>{vendorCode}</td>
        <td>${price}</td>
        <td>
          {rating}
          <i className="fas fa-star" />
        </td>
        <td>
          <button type="button" className="btn btn-primary" onClick={this.onDeleteClockHandler}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteClock: id => dispatch(deleteItemAdmin(id)),
  };
};

OneClockItemForAdmin.propTypes = {
  id: PropTypes.number.isRequired,
  imageClock: PropTypes.string.isRequired,
  brandClock: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
  vendorCode: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  onDeleteClock: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(OneClockItemForAdmin);

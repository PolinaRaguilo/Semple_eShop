import React from 'react';
import PropTypes from 'prop-types';

import './OneClockItemForAdmin.css';

class OneClockItemForAdmin extends React.Component {
  render() {
    const { id, imageClock, brandClock, collection, vendorCode, price, onDeleteClock } = this.props;

    return (
      <tr>
        <td>{id}</td>
        <td>
          <img src={imageClock} alt="img" className="clock_img" />
        </td>
        <td>{brandClock}</td>
        <td>{collection}</td>
        <td>{vendorCode}</td>
        <td>${price}</td>
        <td>
          <button type="button" className="btn btn-primary btn_delete" onClick={onDeleteClock}>
            Удалить
          </button>
        </td>
      </tr>
    );
  }
}

OneClockItemForAdmin.propTypes = {
  id: PropTypes.number,
  imageClock: PropTypes.string,
  brandClock: PropTypes.string,
  collection: PropTypes.string,
  vendorCode: PropTypes.string,
  price: PropTypes.number,
  onDeleteClock: PropTypes.func,
};

OneClockItemForAdmin.defaultProps = {
  id: 0,
  imageClock: 'https://hellenic.property/wp-content/uploads/2018/01/No-Image.jpg',
  brandClock: 'none',
  collection: 'none',
  vendorCode: 'none',
  price: 0,
  onDeleteClock: () => {},
};

export default OneClockItemForAdmin;

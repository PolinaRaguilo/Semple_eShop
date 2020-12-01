import React from 'react';
import PropTypes from 'prop-types';

class OneItemCart extends React.Component {
  render() {
    const { imageClock, brandClock, vendorCode, price } = this.props;
    return (
      <tr className="table-light">
        <td>
          <img src={imageClock} alt="cart-clock" className="clock-cart" />
        </td>
        <td>{brandClock}</td>
        <td>{vendorCode}</td>
        <td>{price}$</td>
        <td>
          <i className="far fa-trash-alt" />
        </td>
      </tr>
    );
  }
}

OneItemCart.propTypes = {
  imageClock: PropTypes.string.isRequired,
  brandClock: PropTypes.string.isRequired,
  vendorCode: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default OneItemCart;

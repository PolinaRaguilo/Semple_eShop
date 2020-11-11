import React from "react";

import './OneClockItemForAdmin.css';

class OneClockItemForAdmin extends React.Component {
  render() {
    const {id, imageClock,brand, collection, vendorCode,price} = this.props;

    return (
      <tr >
        <td>{id}</td>
        <td><img src={imageClock} alt="img" className="clock_img"/></td>
        <td>{brand}</td>
        <td>{collection}</td>
        <td>{vendorCode}</td>
        <td>${price}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary btn_delete"
          >
            Удалить
          </button>
        </td>
      </tr>
    );
  }
}

export default OneClockItemForAdmin;

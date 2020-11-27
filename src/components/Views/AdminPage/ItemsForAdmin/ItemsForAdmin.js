import React from 'react';
import PropTypes from 'prop-types';
import OneClockItemForAdmin from './OneClockItemForAdmin/OneClockItemForAdmin';

import './ItemsForAdmin.css';

class ItemsForAdmin extends React.Component {
  state = {};

  onSubmit = e => {
    const { imageClock, brandClock, collection, vendorCode, price } = this.state;
    e.preventDefault();
    this.props.addNewClock(imageClock, brandClock, collection, vendorCode, price);
  };

  onInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { adminData, onDeleteClock } = this.props;

    const clocksItems = adminData.clocks.map(item => {
      const { id, imageClock, brandClock, collection, vendorCode, price, rating } = item;
      return (
        <OneClockItemForAdmin
          key={id}
          id={id}
          imageClock={imageClock}
          brandClock={brandClock}
          collection={collection}
          vendorCode={vendorCode}
          price={price}
          rating={rating}
          onDeleteClock={onDeleteClock}
        />
      );
    });
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div className="form-group add-clock ">
            <div className="col">
              <label htmlFor="imgInput">Image</label>
              <input
                type="text"
                className="form-control"
                id="imgInput"
                placeholder="URL"
                name="imageClock"
                onChange={this.onInputChange}
              />

              <label htmlFor="brandInput">Brand</label>
              <input
                type="text"
                className="form-control"
                id="brandInput"
                name="brandClock"
                onChange={this.onInputChange}
              />

              <div className="form-group">
                <label className="control-label" htmlFor="priceInput">
                  Price
                </label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="priceInput"
                    name="price"
                    onChange={this.onInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="col">
              <label htmlFor="collectionInput">Collection</label>
              <input
                type="text"
                className="form-control"
                id="collectionInput"
                name="collection"
                onChange={this.onInputChange}
              />

              <label htmlFor="vendorCodeInput">Code</label>
              <input
                type="text"
                className="form-control"
                id="vendorCodeInput"
                name="vendorCode"
                onChange={this.onInputChange}
              />

              <button type="submit" className="btn btn-primary btn-add">
                Добавить
              </button>
            </div>
          </div>
        </form>
        <table className="table-container table table-hover">
          <thead className="table-warning">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Image</th>
              <th scope="col">Brand</th>
              <th scope="col">Collection</th>
              <th scope="col">Code</th>
              <th scope="col">Price</th>
              <th scope="col">Rating</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{clocksItems}</tbody>
        </table>
      </>
    );
  }
}

ItemsForAdmin.propTypes = {
  adminData: PropTypes.object.isRequired,
  addNewClock: PropTypes.func.isRequired,
  onDeleteClock: PropTypes.func.isRequired,
};

export default ItemsForAdmin;

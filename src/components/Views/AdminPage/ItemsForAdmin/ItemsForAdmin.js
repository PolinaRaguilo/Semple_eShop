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
    const { name } = e.target;
    const { value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { adminData, onDeleteClock } = this.props;

    const clocksItems = adminData.clocks.map(item => {
      const { id, imageClock, brandClock, collection, vendorCode, price } = item;
      return (
        <OneClockItemForAdmin
          key={id}
          id={id}
          imageClock={imageClock}
          brandClock={brandClock}
          collection={collection}
          vendorCode={vendorCode}
          price={price}
          onDeleteClock={() => onDeleteClock(id)}
        />
      );
    });
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div className="form-group add_clock ">
            <div className="col">
              <label htmlFor="imgInput">Изображение</label>
              <input
                type="text"
                className="form-control"
                id="imgInput"
                placeholder="URL"
                name="imageClock"
                onChange={this.onInputChange}
              />

              <label htmlFor="brandInput">Бренд</label>
              <input
                type="text"
                className="form-control"
                id="brandInput"
                name="brandClock"
                onChange={this.onInputChange}
              />

              <div className="form-group">
                <label className="control-label" htmlFor="priceInput">
                  Цена
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
              <label htmlFor="collectionInput">Коллекция</label>
              <input
                type="text"
                className="form-control"
                id="collectionInput"
                name="collection"
                onChange={this.onInputChange}
              />

              <label htmlFor="vendorCodeInput">Артикул</label>
              <input
                type="text"
                className="form-control"
                id="vendorCodeInput"
                name="vendorCode"
                onChange={this.onInputChange}
              />

              <button type="submit" className="btn btn-primary btn_add">
                Добавить
              </button>
            </div>
          </div>
        </form>
        <table className="table_container table table-hover">
          <thead className="table-warning">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Фото</th>
              <th scope="col">Бренд</th>
              <th scope="col">Коллекция</th>
              <th scope="col">Артикул</th>
              <th scope="col">Цена</th>
              <th scope="col">Удалить?</th>
            </tr>
          </thead>
          <tbody>{clocksItems}</tbody>
        </table>
      </>
    );
  }
}

ItemsForAdmin.propTypes = {
  adminData: PropTypes.array,
  addNewClock: PropTypes.func,
  onDeleteClock: PropTypes.func,
};

ItemsForAdmin.defaultProps = {
  addNewClock: () => {},
  onDeleteClock: () => {},
  adminData: [],
};

export default ItemsForAdmin;

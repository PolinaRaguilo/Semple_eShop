import React from 'react';
import PropTypes from 'prop-types';

import './OneClockItemForAdmin.css';
import { connect } from 'react-redux';
import {
  deleteItemAdmin,
  onEditClock,
  onSaveUpdateClock,
} from '../../../../../redux/actions/clocksActions';

class OneClockItemForAdmin extends React.Component {
  state = {
    newImageClock: this.props.imageClock,
    newBrand: this.props.brandClock,
    newCollection: this.props.collection,
    newCode: this.props.vendorCode,
    newPrice: this.props.price,
    newGender: this.props.gender,
  };

  onDeleteClockHandler = () => {
    this.props.onDeleteClock(this.props.id);
  };

  onUpdateClockHandler = () => {
    this.props.onEditClock(this.props.id, true);
  };

  onSaveClock = () => {
    const { newImageClock, newBrand, newCollection, newCode, newPrice, newGender } = this.state;
    this.props.onEditClock(this.props.id, false);
    this.props.onSaveEdit(
      this.props.id,
      newImageClock,
      newBrand,
      newCollection,
      newCode,
      newPrice,
      newGender
    );
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      imageClock,
      brandClock,
      collection,
      vendorCode,
      price,
      rating,
      editClock,
      gender,
    } = this.props;

    return (
      <tr>
        <td>
          {editClock ? (
            <input
              className="form-control"
              type="text"
              value={this.state.newImageClock}
              onChange={this.onInputChange}
              name="newImageClock"
            />
          ) : (
            <img src={imageClock} alt="img" className="clock-img" />
          )}
        </td>
        <td>
          {editClock ? (
            <input
              className="form-control"
              type="text"
              value={this.state.newGender}
              onChange={this.onInputChange}
              name="newGender"
            />
          ) : (
            gender
          )}
        </td>
        <td>
          {editClock ? (
            <input
              type="text"
              className="form-control"
              value={this.state.newBrand}
              onChange={this.onInputChange}
              name="newBrand"
            />
          ) : (
            brandClock
          )}
        </td>
        <td>
          {editClock ? (
            <input
              type="text"
              className="form-control"
              onChange={this.onInputChange}
              name="newCollection"
              value={this.state.newCollection}
            />
          ) : (
            collection
          )}
        </td>
        <td>
          {editClock ? (
            <input
              type="text"
              className="form-control"
              onChange={this.onInputChange}
              name="newCode"
              value={this.state.newCode}
            />
          ) : (
            vendorCode
          )}
        </td>
        <td>
          {editClock ? (
            <input
              type="text"
              className="form-control"
              onChange={this.onInputChange}
              name="newPrice"
              value={this.state.newPrice}
            />
          ) : (
            `$${price}`
          )}
        </td>
        <td>
          {rating}
          <i className="fas fa-star" />
        </td>
        <td>
          <div className="btns-actions-wrapper">
            <button
              type="button"
              className={editClock ? 'btn btn-primary btn-hide' : 'btn btn-primary'}
              onClick={this.onDeleteClockHandler}
            >
              Delete
            </button>
            <button
              type="button"
              className={editClock ? 'btn btn-warning btn-hide' : 'btn btn-warning'}
              onClick={this.onUpdateClockHandler}
            >
              Edit
            </button>
            <button
              type="button"
              className={editClock ? 'btn btn-success' : 'btn btn-success btn-hide'}
              onClick={this.onSaveClock}
            >
              Save
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteClock: id => dispatch(deleteItemAdmin(id)),
    onEditClock: (id, value) => dispatch(onEditClock(id, value)),
    onSaveEdit: (id, newImageClock, newBrand, newCollection, newCode, newPrice, newGender) =>
      dispatch(
        onSaveUpdateClock(id, newImageClock, newBrand, newCollection, newCode, newPrice, newGender)
      ),
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
  gender: PropTypes.string.isRequired,
  editClock: PropTypes.bool.isRequired,
  onDeleteClock: PropTypes.func.isRequired,
  onEditClock: PropTypes.func.isRequired,
  onSaveEdit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(OneClockItemForAdmin);

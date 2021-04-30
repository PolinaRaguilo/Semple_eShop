import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './UserItem.css';

import { deleteUser } from '../../../../../redux/actions/usersAction';

class UserItem extends React.Component {
  cartOfUser = JSON.parse(localStorage.getItem('cartsUsers'));

  onDeleteUserHandler = () => {
    const cartOfUser = JSON.parse(localStorage.getItem('cartsUsers'));
    delete cartOfUser[`cart-${this.props.email}`];
    localStorage.setItem('cartsUsers', JSON.stringify(cartOfUser));
    this.props.onDeleteUser(this.props.id);
  };

  render() {
    const { firstName, lastName, email, requestDelete } = this.props;

    const classes = 'btn btn-primary';
    const classesDelete = 'btn btn-success';
    const btns = requestDelete ? classesDelete : classes;
    const btnDisable = requestDelete ? null : 'disable';
    return (
      <tr className="tr__user">
        <td> {firstName} </td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>
          <button
            disabled={btnDisable}
            type="button"
            className={btns}
            onClick={this.onDeleteUserHandler}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteUser: id => dispatch(deleteUser(id)),
  };
};

UserItem.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
  requestDelete: PropTypes.bool.isRequired,
};

export default connect(null, mapDispatchToProps)(UserItem);

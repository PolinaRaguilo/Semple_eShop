import React from 'react';
import PropTypes from 'prop-types';

import './UserItem.css';

class UserItem extends React.Component {
  render() {
    const { firstName, lastName, email, onDeleteUser } = this.props;

    return (
      <tr>
        <td> {firstName} </td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>
          <button type="button" className="btn btn-primary btn_delete" onClick={onDeleteUser}>
            Удалить
          </button>
        </td>
      </tr>
    );
  }
}

UserItem.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  onDeleteUser: PropTypes.func,
};

UserItem.defaultProps = {
  firstName: 'no information',
  lastName: 'no information',
  email: 'no information',
  onDeleteUser: () => {},
};

export default UserItem;

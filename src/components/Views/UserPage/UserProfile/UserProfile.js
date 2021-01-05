import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './UserProfile.css';
import { deleteRequest } from '../../../../redux/actions/usersAction';

class UserProfile extends React.Component {
  currUser = this.props.users.find(user => user.email === this.props.currentUser);

  onRequestHandler = () => {
    this.props.onRequestDelete(this.currUser.id);
  };

  render() {
    return (
      <div className="container">
        <img
          id="profile-img"
          className="profile-img-card"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/600px-User_icon_2.svg.png"
          alt="UserImg"
        />
        <h4 className="profile-title">Profile</h4>
        <button type="button" className="btn btn-outline-primary btn-edit">
          Edit profile
        </button>
        <table className="table profile-table">
          <tbody>
            <tr>
              <td>
                <b>Name</b>
              </td>
              <td>{this.currUser.firstName}</td>
            </tr>
            <tr>
              <td>
                <b>Surname</b>
              </td>
              <td>{this.currUser.lastName}</td>
            </tr>
            <tr>
              <td>
                <b>Email</b>
              </td>
              <td>{this.currUser.email}</td>
            </tr>
          </tbody>
        </table>
        <div className="btns">
          <button type="button" className="btn btn-outline-primary btn-editPsw">
            Change password
          </button>
          <button
            type="button"
            className="btn btn-outline-primary btn-deleteProfile"
            onClick={this.onRequestHandler}
          >
            <span className="beforeSend">Delete profile</span>
            <span className="afterSend">
              You sent the request to delete <i className="fas fa-user-slash" />
            </span>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.authorizationReducer.currentUser,
    users: state.usersReducer.usersAdmin,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDelete: id => dispatch(deleteRequest(id)),
  };
};

UserProfile.propTypes = {
  currentUser: PropTypes.string.isRequired,
  onRequestDelete: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

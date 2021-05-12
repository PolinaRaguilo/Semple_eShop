/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react';
import PropTypes from 'prop-types';
import './ChangePassword.css';
import { Alert, AlertTitle } from '@material-ui/lab';

import { fbDatabase } from '../../config/fbConfig';

const checkEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;

class ChangePassword extends Component {
  state = { errMsg: 'Email is empty or not valid', err: false, success: false };

  onInputChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  clearInputs = () => {
    this.setState({
      emailForReset: '',
    });
  };

  onCloseHandler = () => {
    this.props.onCloseModal();
    this.setState({ err: false, success: false });
  };

  onChangeSubmit = e => {
    e.preventDefault();

    if (checkEmail.test(this.state.emailForReset)) {
      fbDatabase
        .auth()
        .sendPasswordResetEmail(this.state.emailForReset)
        .then(() => {
          this.clearInputs();
          this.setState({ err: false, success: true });
        });
    } else {
      this.setState({ err: true, success: false });
    }
  };

  render() {
    return (
      <div className=" modal show">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change password</h5>
            </div>
            <div className="change_modal modal-body">
              {this.state.err && (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {this.state.errMsg}
                </Alert>
              )}
              {this.state.success && (
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  Check your email and follow insctructions there
                </Alert>
              )}

              <form action="submit">
                <label htmlFor="emailForReset">Repeat your login(email): </label>
                <input id="emailForReset" className="input" onChange={this.onInputChange} />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={this.onChangeSubmit}
              >
                Ok
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={this.onCloseHandler}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ChangePassword.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default ChangePassword;

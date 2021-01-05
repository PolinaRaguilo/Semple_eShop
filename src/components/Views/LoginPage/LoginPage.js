import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsers } from '../../../redux/actions/usersAction';
import LoginForm from './LoginForm/LoginForm';

class LoginPage extends React.Component {
  componentDidMount = () => {
    this.props.getUsers();
  };

  render() {
    return <LoginForm />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

LoginPage.propTypes = {
  getUsers: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginPage);

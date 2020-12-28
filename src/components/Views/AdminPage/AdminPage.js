import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchUsers } from '../../../redux/actions/usersAction';
import ItemsForAdmin from './ItemsForAdmin/ItemsForAdmin';
import SearchAdminForm from './SearchAdminForm/SearchAdminForm';
import UserTable from './UserTable/UserTable';
import { fetchClocks } from '../../../redux/actions/clocksActions';

class AdminPage extends React.Component {
  componentDidMount = () => {
    this.props.getClocks();
    this.props.getUsers();
  };

  render() {
    return (
      <>
        <SearchAdminForm />
        <Switch>
          <Route path="/admin/userTable" component={UserTable} />
          <Route path="/admin/itemsTable" component={ItemsForAdmin} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(fetchUsers()),
    getClocks: () => dispatch(fetchClocks()),
  };
};

AdminPage.propTypes = {
  getUsers: PropTypes.func.isRequired,
  getClocks: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AdminPage);

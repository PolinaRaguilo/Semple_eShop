import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import ItemsForAdmin from './ItemsForAdmin/ItemsForAdmin';
import SearchAdminForm from './SearchAdminForm/SearchAdminForm';
import UserTable from './UserTable/UserTable';

class AdminPage extends React.Component {
  deleteUser = id => {
    this.props.deleteSomething('users', id);
  };

  deleteClock = id => {
    this.props.deleteSomething('clocks', id);
  };

  render() {
    const { adminData } = this.props;
    if (adminData.showAdmin === true) {
      return (
        <>
          <SearchAdminForm />
          <Switch>
            <Route
              path="/admin/userTable"
              render={() => (
                <UserTable usersData={adminData.users} onDeleteUser={this.deleteUser} />
              )}
            />

            <Route
              path="/admin/itemsTable"
              render={() => (
                <ItemsForAdmin
                  adminData={adminData}
                  onDeleteClock={this.deleteClock}
                  onInputChange={this.props.onInputChange}
                  addNewClock={this.props.addNewClock}
                />
              )}
            />
          </Switch>
        </>
      );
    }
    return <Redirect to="/" />;
  }
}

AdminPage.propTypes = {
  deleteSomething: PropTypes.func,
  adminData: PropTypes.array,
  onInputChange: PropTypes.func,
  addNewClock: PropTypes.func,
};

AdminPage.defaultProps = {
  deleteSomething: () => {},
  adminData: [],
  onInputChange: () => {},
  addNewClock: () => {},
};

export default AdminPage;

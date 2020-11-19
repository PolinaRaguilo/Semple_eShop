import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Header from '../../Header/Header';
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
    return (
      <>
        <Header />
        <SearchAdminForm />
        <Switch>
          <Route
            path="/admin/userTable"
            render={() => <UserTable usersData={adminData.users} onDeleteUser={this.deleteUser} />}
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

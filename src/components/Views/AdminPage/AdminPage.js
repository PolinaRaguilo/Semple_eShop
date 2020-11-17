import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import Header from '../../Header/Header';
import ItemsForAdmin from './ItemsForAdmin/ItemsForAdmin';
import SearchAdminForm from './SearchAdminForm/SearchAdminForm';
import UserTable from './UserTable/UserTable';

class AdminPage extends React.Component {
  


  deleteUser = (id) => {
    this.props.deleteSomething("users", id);
  };

  deleteClock = (id) => {
    this.props.deleteSomething("clocks", id);
  };

  render() {
    const {adminData} = this.props;
    return (
      <React.Fragment>
        <Header />
        <SearchAdminForm />
        <Switch>
          <Route
            path="/admin/userTable"
            render={() => (
              <UserTable
                usersData={adminData.users}
                onDeleteUser={this.deleteUser}
              />
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
      </React.Fragment>
    );
  }
}

export default AdminPage;
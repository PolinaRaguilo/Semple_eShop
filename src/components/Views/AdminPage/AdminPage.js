import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import Header from '../../Header/Header';
import ItemsForAdmin from './ItemsForAdmin/ItemsForAdmin';
import SearchAdminForm from './SearchAdminForm/SearchAdminForm';
import UserTable from './UserTable/UserTable';

class AdminPage extends React.Component {
  

  // deleteSomething = (stateS, id) => {
  //   const {adminData} = this.props;
  //   let newData = adminData[stateS].filter((item) => item.id !== id);
  //   this.setState({
  //     [stateS]: newData,
  //   });
  // };

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
                clocksData={adminData.clocks}
                onDeleteClock={this.deleteClock}
              />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default AdminPage;
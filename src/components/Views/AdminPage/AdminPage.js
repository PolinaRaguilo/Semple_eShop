import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import ItemsForAdmin from './ItemsForAdmin/ItemsForAdmin';
import SearchAdminForm from './SearchAdminForm/SearchAdminForm';
import UserTable from './UserTable/UserTable';

class AdminPage extends React.Component {
  // deleteUser = id => {
  //   this.props.deleteSomething('users', id);
  // };

  // deleteClock = id => {
  //   this.props.deleteSomething('clocks', id);
  // };

  render() {
    return (
      <>
        <SearchAdminForm />
        <Switch>
          <Route path="/admin/userTable" component={UserTable} />

          <Route
            path="/admin/itemsTable"
            render={() => <ItemsForAdmin onInputChange={this.props.onInputChange} />}
          />
        </Switch>
      </>
    );
  }
}

AdminPage.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default AdminPage;

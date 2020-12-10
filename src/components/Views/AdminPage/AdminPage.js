import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItemsForAdmin from './ItemsForAdmin/ItemsForAdmin';
import SearchAdminForm from './SearchAdminForm/SearchAdminForm';
import UserTable from './UserTable/UserTable';

class AdminPage extends React.Component {
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

export default AdminPage;

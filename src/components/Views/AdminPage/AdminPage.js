import React from 'react';
import Header from '../../Header/Header';
import SearchAdminForm from './SearchAdminForm/SearchAdminForm';
import UserTable from './UserTable/UserTable';

class AdminPage extends React.Component{

  render(){
    return(
      <React.Fragment>
        <Header/>
        <SearchAdminForm/>
        <UserTable/>
      </React.Fragment>
    )
  }
}

export default AdminPage;
import React from 'react';
import Header from '../../Header/Header';
import SearchAdminForm from './SearchAdminForm/SearchAdminForm';
import UserTable from './UserTable/UserTable';

class AdminPage extends React.Component{

  state = {
    users:[
      {id: 1, firstName: 'Иван', lastName:'Иванов', email:'iv2020@mail.ru'},
      {id: 2, firstName: 'Петр', lastName:'Петров', email:'pp2020@mail.ru'},
      {id: 3, firstName: 'Влад', lastName:'Сидоров', email:'vl2020@mail.ru'},
    ]
  }

  render(){
    return(
      <React.Fragment>
        <Header/>
        <SearchAdminForm/>
        <UserTable usersData={this.state.users}/>
      </React.Fragment>
    )
  }
}

export default AdminPage;
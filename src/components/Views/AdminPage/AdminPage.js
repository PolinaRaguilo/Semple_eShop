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

  deleteUser = (id) => {
    this.setState(({users}) => {
      let idToDel = users.findIndex(elem => elem.id === id);

      let beforeDelItem = users.slice(0, idToDel);
      let afterDelItem = users.slice(idToDel + 1);

      let newData = [...beforeDelItem, ...afterDelItem];
      return {
        users: newData
      }
    })
  }

  render(){
    return(
      <React.Fragment>
        <Header/>
        <SearchAdminForm/>
        <UserTable usersData={this.state.users} onDelete={this.deleteUser}/>
      </React.Fragment>
    )
  }
}

export default AdminPage;
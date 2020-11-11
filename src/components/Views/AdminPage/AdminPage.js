import React from 'react';
import Header from '../../Header/Header';
import ItemsTableForAdmin from './ItemsTableForAdmin/ItemsTableForAdmin';
import SearchAdminForm from './SearchAdminForm/SearchAdminForm';
import UserTable from './UserTable/UserTable';

class AdminPage extends React.Component{

  state = {
    users:[
      {id: 1, firstName: 'Иван', lastName:'Иванов', email:'iv2020@mail.ru'},
      {id: 2, firstName: 'Петр', lastName:'Петров', email:'pp2020@mail.ru'},
      {id: 3, firstName: 'Влад', lastName:'Сидоров', email:'vl2020@mail.ru'},
    ],
      clocks: [
        {id:1, imageClock: 'https://cdn21vek.by/img/galleries/107/446/preview_b/t0554171105700_tissot_560d1af9300af.jpeg', brand:'Tissot',collection: 'T-Sport', vendorCode: 'T055.417.11.057.00', price: 1000},
        {id:2, imageClock: 'https://cdn21vek.by/img/galleries/781/468/preview_b/t1014172306100_tissot_5bffb202e2065.png', brand:'Tissot',collection: 'T-Classic', vendorCode: 'T101.417.23.061.00', price: 1500},
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
        <ItemsTableForAdmin clocksData={this.state.clocks}/>
      </React.Fragment>
    )
  }
}

export default AdminPage;
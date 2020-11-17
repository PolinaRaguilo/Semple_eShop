import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminPage from '../Views/AdminPage/AdminPage';
import ItemsForAdmin from '../Views/AdminPage/ItemsForAdmin/ItemsForAdmin';
import UserTable from '../Views/AdminPage/UserTable/UserTable';
import ItemsPage from '../Views/ItemsPage/ItemsPage';
import LoginPage from '../Views/LoginPage/LoginPage';
import RegistrationPage from '../Views/RegistrationPage/RegistrationPage';
import UserPage from '../Views/UserPage/UserPage';


class App extends React.Component{

  state = {
    users: [
      { id: 1, firstName: "Иван", lastName: "Иванов", email: "iv2020@mail.ru" },
      { id: 2, firstName: "Петр", lastName: "Петров", email: "pp2020@mail.ru" },
      {id: 3,  firstName: "Влад",  lastName: "Сидоров",  email: "vl2020@mail.ru"},
    ],
    clocks: [
      {
        id: 1,
        imageClock:
          "https://cdn21vek.by/img/galleries/107/446/preview_b/t0554171105700_tissot_560d1af9300af.jpeg",
        brandClock: "Tissot",
        collection: "T-Sport",
        vendorCode: "T055.417.11.057.00",
        price: 1000,
      },
      {
        id: 2,
        imageClock:
          "https://cdn21vek.by/img/galleries/781/468/preview_b/t1014172306100_tissot_5bffb202e2065.png",
        brandClock: "Tissot",
        collection: "T-Classic",
        vendorCode: "T101.417.23.061.00",
        price: 1500,
      },
    ],
    brands: [
      {id:1, brand:'Tissot'},
      {id:2, brand:'MK'},
      {id:3, brand:'CASIO'},
    ]
  };

  deleteSomething = (stateS, id) => {
    let newData = this.state[stateS].filter((item) => item.id !== id);
    this.setState({
      [stateS]: newData,
    });
  };

  render(){
    return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={()=> <ItemsPage data={this.state} />}/>
        <Route path="/admin" render={()=> <AdminPage adminData={this.state} deleteSomething={this.deleteSomething}/>}/>
        <Route exact path="/user" component={UserPage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/registration" component={RegistrationPage}/>
        <Route render={() => <h2>Page not found 404</h2>}/>
      </Switch>
    </BrowserRouter>
    )
  }
}


export default App;


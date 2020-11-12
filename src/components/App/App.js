import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminPage from '../Views/AdminPage/AdminPage';
import ItemsTableForAdmin from '../Views/AdminPage/ItemsTableForAdmin/ItemsTableForAdmin';
import UserTable from '../Views/AdminPage/UserTable/UserTable';
import ItemsPage from '../Views/ItemsPage/ItemsPage';
import LoginPage from '../Views/LoginPage/LoginPage';
import RegistrationPage from '../Views/RegistrationPage/RegistrationPage';
import UserPage from '../Views/UserPage/UserPage';


class App extends React.Component{


  render(){
    return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ItemsPage}/>
        <Route path="/admin" component={AdminPage}/>
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


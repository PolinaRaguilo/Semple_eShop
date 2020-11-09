import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminPage from '../Views/AdminPage/AdminPage';
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
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;

// <AdminPage/>
      // <ItemsPage/>
    //  <LoginPage/>
    // <RegistrationForm/>
    // <UserPage/>
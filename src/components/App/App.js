import React from 'react';
import Header from '../Header/Header';
import AdminPage from '../Views/AdminPage/AdminPage';
import ItemsPage from '../Views/ItemsPage/ItemsPage';
import LoginPage from '../Views/LoginPage/LoginPage';
import RegistrationForm from '../Views/RegistrationPage/RegistrationForm/RegistrationForm';
import UserPage from '../Views/UserPage/UserPage';


class App extends React.Component{

  render(){
    return(
      // <AdminPage/>
      // <ItemsPage/>
    //  <LoginPage/>
    // <RegistrationForm/>
    <UserPage/>
    )
  }
}

export default App;
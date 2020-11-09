import React from 'react';
import Header from '../../Header/Header';
import UserProfile from './UserProfile/UserProfile';


class UserPage extends React.Component{

  render(){
    return (
      <React.Fragment>
        <Header />
        <UserProfile />
      </React.Fragment>
    );
  }
}

export default UserPage;
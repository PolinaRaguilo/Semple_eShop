import React from 'react';
import Header from '../../Header/Header';
import UserProfile from './UserProfile/UserProfile';

class UserPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <UserProfile />
      </>
    );
  }
}

export default UserPage;

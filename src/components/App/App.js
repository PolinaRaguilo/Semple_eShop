import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Header from '../Header/Header';
import AdminPage from '../Views/AdminPage/AdminPage';
import ItemsPage from '../Views/ItemsPage/ItemsPage';
import LoginPage from '../Views/LoginPage/LoginPage';
import RegistrationPage from '../Views/RegistrationPage/RegistrationPage';
import UserPage from '../Views/UserPage/UserPage';
// import Cart from '../Cart/Cart';
import { fetchUsers } from '../../redux/actions/usersAction';

class App extends React.Component {
  componentDidMount = () => {
    this.props.getUsers();
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          {/* <Route component={Cart} /> */}
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/items" component={ItemsPage} />
            <PrivateRoute
              path="/admin"
              showAdmin={this.props.showAdminPage}
              component={AdminPage}
            />
            <Route exact path="/user" component={UserPage} />
            <Route exact path="/registration" component={RegistrationPage} />
            <Route render={() => <h2>Page not found 404</h2>} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

App.propTypes = {
  showAdminPage: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    showAdminPage: state.authorizationReducer.showAdmin,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

App.propTypes = {
  getUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

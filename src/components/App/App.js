import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import AdminPage from '../Views/AdminPage/AdminPage';
import ItemsPage from '../Views/ItemsPage/ItemsPage';
import LoginPage from '../Views/LoginPage/LoginPage';
import RegistrationPage from '../Views/RegistrationPage/RegistrationPage';
import UserPage from '../Views/UserPage/UserPage';

const PrivateRoute = ({ component: Component, showAdmin, ...rest }) => (
  <Route
    {...rest}
    render={props => (showAdmin === false ? <Component {...props} /> : <Redirect to="/admin" />)}
  />
);

class App extends React.Component {
  maxId = 3;

  state = {
    users: [
      { id: 1, firstName: 'Иван', lastName: 'Иванов', email: 'iv2020@mail.ru' },
      { id: 2, firstName: 'Петр', lastName: 'Петров', email: 'pp2020@mail.ru' },
      { id: 3, firstName: 'Влад', lastName: 'Сидоров', email: 'vl2020@mail.ru' },
    ],
    clocks: [
      {
        id: 1,
        imageClock:
          'https://cdn21vek.by/img/galleries/107/446/preview_b/t0554171105700_tissot_560d1af9300af.jpeg',
        brandClock: 'Tissot',
        collection: 'T-Sport',
        vendorCode: 'T055.417.11.057.00',
        price: 1000,
        rating: 0,
      },
      {
        id: 2,
        imageClock:
          'https://cdn21vek.by/img/galleries/781/468/preview_b/t1014172306100_tissot_5bffb202e2065.png',
        brandClock: 'Tissot',
        collection: 'T-Classic',
        vendorCode: 'T101.417.23.061.00',
        price: 1500,
        rating: 2,
      },
    ],
    brands: [
      { id: 1, brand: 'Tissot' },
      { id: 2, brand: 'MK' },
      { id: 3, brand: 'CASIO' },
    ],
    showAdmin: false,
  };

  toogle = () => {
    this.setState(state => ({
      showAdmin: !state.showAdmin,
    }));
  };

  addRating = value => {
    this.setState(({ clocks }) => {
      const newObj = {
        ...clocks,
        rating: value,
      };
      return {
        clocks: newObj,
      };
    });
  };

  deleteSomething = (stateS, id) => {
    // const newData = this.state[stateS].filter(item => item.id !== id);
    // this.setState({
    //   [stateS]: newData,
    // });
    this.setState(prevState => {
      const newData = prevState[stateS].filter(item => item.id !== id);
      return { [stateS]: newData };
    });
  };

  addNewClock = (imageClock, brandClock, collection, vendorCode, price) => {
    this.setState(({ clocks }) => {
      const newArr = [
        ...clocks,
        {
          id: ++this.maxId,
          imageClock,
          brandClock,
          collection,
          vendorCode,
          price,
        },
      ];
      return {
        clocks: newArr,
      };
    });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <Header toogle={this.toogle} />
          <Switch>
            {/* <Route
              exact
              path="/"
              render={() => <ItemsPage data={this.state} addRating={this.addRating} />}
            /> */}
            <PrivateRoute
              exact
              path="/"
              showAdmin={this.state.showAdmin}
              component={() => <ItemsPage data={this.state} addRating={this.addRating} />}
            />

            <Route
              path="/admin"
              component={() => (
                <AdminPage
                  adminData={this.state}
                  deleteSomething={this.deleteSomething}
                  addNewClock={this.addNewClock}
                />
              )}
            />
            <Route exact path="/user" component={UserPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/registration" component={RegistrationPage} />
            <Route render={() => <h2>Page not found 404</h2>} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  showAdmin: PropTypes.bool.isRequired,
};

export default App;

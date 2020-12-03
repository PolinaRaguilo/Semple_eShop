import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Header from '../Header/Header';
import AdminPage from '../Views/AdminPage/AdminPage';
import ItemsPage from '../Views/ItemsPage/ItemsPage';
import LoginPage from '../Views/LoginPage/LoginPage';
import RegistrationPage from '../Views/RegistrationPage/RegistrationPage';
import UserPage from '../Views/UserPage/UserPage';
import Cart from '../Cart/Cart';

class App extends React.Component {
  state = {
    showAdmin: false,
    total: 0,
    cartItems: [],
  };

  onAddedToCart = idClock => {
    const clock = this.state.clocks.find(item => item.id === idClock);
    const { id, imageClock, brandClock, vendorCode, price } = clock;
    this.setState(({ cartItems }) => {
      const newClockArr = [
        ...cartItems,
        {
          id,
          imageClock,
          brandClock,
          vendorCode,
          price,
        },
      ];
      return {
        cartItems: newClockArr,
      };
    });
  };

  toogle = () => {
    this.setState(state => ({
      showAdmin: !state.showAdmin,
    }));
  };

  addRating = (value, id) => {
    this.setState(({ clocks }) => {
      const newArr = clocks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            rating: value,
          };
        }
        return item;
      });

      return {
        clocks: newArr,
      };
    });
  };

  deleteSomething = (stateS, id) => {
    this.setState(prevState => {
      const newData = prevState[stateS].filter(item => item.id !== id);
      return { [stateS]: newData };
    });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <Header toogle={this.toogle} />
          <Route
            component={() => (
              <Cart
                cartItems={this.state.cartItems}
                total={this.state.total}
                deleteItemsCart={this.deleteSomething}
              />
            )}
          />

          <Switch>
            <Route
              exact
              path="/items"
              render={() => (
                <ItemsPage addRating={this.addRating} onAddedToCart={this.onAddedToCart} />
              )}
            />

            <PrivateRoute
              path="/admin"
              showAdmin={this.state.showAdmin}
              component={() => <AdminPage deleteSomething={this.deleteSomething} />}
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

export default App;

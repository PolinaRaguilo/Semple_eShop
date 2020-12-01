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
      {
        id: 3,
        imageClock:
          'https://cdn21vek.by/img/galleries/1009/136/preview_b/t0984073605200_tissot_5cda9f1025c3f.png',
        brandClock: 'Tissot',
        collection: 'T-Sport',
        vendorCode: 'T098.407.36.052.00',
        price: 1400,
        rating: 1,
      },
      {
        id: 4,
        imageClock:
          'https://cdn21vek.by/img/galleries/568/868/preview_b/t1166173605701_tissot_5baa150634c75.jpeg',
        brandClock: 'Tissot',
        collection: 'T-Sport',
        vendorCode: 'T116.617.36.057.01',
        price: 1800,
        rating: 3,
      },
    ],
    brands: [
      { id: 1, brand: 'Tissot' },
      { id: 2, brand: 'MK' },
      { id: 3, brand: 'CASIO' },
    ],
    showAdmin: false,
    openModal: false,
    total: 0,
    cartItems: [],
  };

  onOpenModal = () => {
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  onAddedToCart = id => {
    const clock = this.state.clocks.find(item => item.id === id);
    const { imageClock, brandClock, vendorCode, price } = clock;
    // const clockForCart = {
    //   imageClock: clock.imageClock,
    //   brandClock: clock.brandClock,
    //   vendorCode: clock.vendorCode,
    //   price: clock.price,
    // };
    this.setState(({ cartItems }) => {
      const newClockArr = [
        ...cartItems,
        {
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
          rating: 0,
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
          <Header
            toogle={this.toogle}
            onOpenModal={this.onOpenModal}
            onCloseModal={this.onCloseModal}
            isOpen={this.state.openModal}
          />
          <Route
            component={() => (
              <Cart
                onCloseModal={this.onCloseModal}
                isOpen={this.state.openModal}
                cartItems={this.state.cartItems}
                total={this.state.total}
              />
            )}
          />

          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <ItemsPage
                  data={this.state}
                  addRating={this.addRating}
                  onAddedToCart={this.onAddedToCart}
                />
              )}
            />

            <PrivateRoute
              path="/admin"
              showAdmin={this.state.showAdmin}
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

export default App;

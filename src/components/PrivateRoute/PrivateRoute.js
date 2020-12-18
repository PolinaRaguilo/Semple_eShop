import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, showAdmin, ...rest }) => (
  <Route {...rest} render={props => (showAdmin ? <Component {...props} /> : <Redirect to="/" />)} />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  showAdmin: PropTypes.bool.isRequired,
};
export default PrivateRoute;

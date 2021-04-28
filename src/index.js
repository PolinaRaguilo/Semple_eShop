import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App/App';
import './index.css';
import mainReducer from './redux/reducers';

function saveToLocal(state) {
  const SerState = JSON.stringify(state);
  localStorage.setItem('authReducer', SerState);
}

function loadFromLocal() {
  const SState = localStorage.getItem('authReducer');
  if (SState === null) return undefined;
  return JSON.parse(SState);
}
const pState = loadFromLocal();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(mainReducer, pState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => saveToLocal(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

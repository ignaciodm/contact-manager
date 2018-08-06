import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers/index';

import './styles/main.scss';

import App from './containers/App';
let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('app')
);

import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import App from './containers/App';


import 'bootstrap/dist/css/bootstrap.css'
import './styles/main.scss';


let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('app')
);

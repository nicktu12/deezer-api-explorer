/* eslint-disable no-undef */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Utils/store';
import App from './App/App';
import './Styles/index.css';

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root'),
);

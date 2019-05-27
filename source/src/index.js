import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.js';
import { Provider } from 'react-redux';
import store from './store';

import './style.scss';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

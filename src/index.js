import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './Routers/AppRouters';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/login.css'
import '../src/styles/config.css'
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouters />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


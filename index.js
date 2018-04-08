import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './reducer'

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
    <App/>
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();

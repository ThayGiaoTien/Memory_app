import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

//Creates a Redux store that holds the complete state tree of your app. 
//There should only be a single store in your app.
const store = createStore(reducers, compose(applyMiddleware(thunk)));
//Middleware lets you wrap the store's dispatch method for fun and profit

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

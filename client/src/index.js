import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//******************* REDUX CONTENT
//import the store and the provider component to give the react app access to the redux store
import store from './redux/store';
import { Provider } from 'react-redux';

//wrap the app in the provider and pass the store in as a prop
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

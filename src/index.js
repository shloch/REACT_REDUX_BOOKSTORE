import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";

let initialState = {
  books:[
    {id: Math.round(10 * Math.random()), title: 'This is a good book one', category: 'Action'},
    {id: Math.round(20 * Math.random()), title: 'This is a good book two', category: 'Learning'},
    {id: Math.round(30 * Math.random()), title: 'This is a good book three', category: 'Horror'},
    {id: Math.round(40 * Math.random()), title: 'This is a good book four', category: 'History'}  
  ]
}

const store = createStore(rootReducer, initialState);
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
  );




import './index.css';

import App from './App';
import { Database } from 'firebase/database';
import React from 'react';
import ReactDOM from 'react-dom';
import { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import reportWebVitals from './reportWebVitals';

export const Context = createContext(null);

const firebaseConfig = {
  apiKey: 'AIzaSyDZPnzNQAs-80ZVaunNIhCkwsfzqPHJ4J8',
  authDomain: 'kakmy-7fe1e.firebaseapp.com',
  databaseURL:
    'https://kakmy-7fe1e-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'kakmy-7fe1e',
  storageBucket: 'kakmy-7fe1e.appspot.com',
  messagingSenderId: '386251112229',
  appId: '1:386251112229:web:6402f60051cf448adb24cc',
};
const firebase = initializeApp(firebaseConfig);
const db = new Database(firebase);
const auth = getAuth(firebase);

console.log('firebase: ', firebase);
console.log('db: ', db);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ auth }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

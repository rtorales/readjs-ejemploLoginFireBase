import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

firebase.initializeApp({
    apiKey: "AIzaSyAlhW4OVwmfbnptcG5PlIucpCX3cnjBkbg",
    authDomain: "pseudogram-29f1a.firebaseapp.com",
    databaseURL: "https://pseudogram-29f1a.firebaseio.com",
    projectId: "pseudogram-29f1a",
    storageBucket: "pseudogram-29f1a.appspot.com",
    messagingSenderId: "811012369695"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

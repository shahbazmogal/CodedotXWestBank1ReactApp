import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Import Firebase as well as any extensions. In this case we're just adding on Firestore (our database)
import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCMya44PT3RW_86TkJSSXZpPHjunRUWv8A",
  authDomain: "palestine-firebase.firebaseapp.com",
  databaseURL: "https://palestine-firebase.firebaseio.com",
  projectId: "palestine-firebase",
  storageBucket: "palestine-firebase.appspot.com",
  messagingSenderId: "158321696365",
  appId: "1:158321696365:web:0244f5f560723107096964",
  measurementId: "G-HY4L34KMCB"
};
firebase.initializeApp(config);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

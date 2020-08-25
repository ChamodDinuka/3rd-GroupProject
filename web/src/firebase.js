import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

require('dotenv').config()
const firebaseConfig = {
  apiKey: "AIzaSyBZKGi3hngBapDpF-Q_JhHVmRogsg8dpjs",
  authDomain: "iter-44dad.firebaseapp.com",
  databaseURL: "https://iter-44dad.firebaseio.com",
  projectId: "iter-44dad",
  storageBucket: "iter-44dad.appspot.com",
  messagingSenderId: "968742616363",
  appId: "1:968742616363:web:0727ccce45be0b9099d96e",
  measurementId: "G-S66JB0QGEE"
  };
  // Initialize Firebase
  
  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;
  
import firebase from 'firebase';
require('dotenv').config()
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: "iter-44dad",
    storageBucket: process.env.BUCKET,
    messagingSenderId: process.env.MESSAGE_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };
  // Initialize Firebase
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
  
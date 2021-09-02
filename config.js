import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA9vQ7UENh6S52sS0TYCkaZX7dZdLMBkvU",
    authDomain: "school-attendance-app-ec47d.firebaseapp.com",
    databaseURL: "https://school-attendance-app-ec47d-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-ec47d",
    storageBucket: "school-attendance-app-ec47d.appspot.com",
    messagingSenderId: "649793610680",
    appId: "1:649793610680:web:be1d124eccc8a3c66ea54d"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

//initialize your database

  export default firebase.database()
 

  
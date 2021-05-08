// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

   // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAJlX8MtwbU-Pf8f8LIGPYirduGEYUwxoY",
    authDomain: "smackchat-c489a.firebaseapp.com",
    databaseURL: "https://smackchat-c489a-default-rtdb.firebaseio.com",
    projectId: "smackchat-c489a",
    storageBucket: "smackchat-c489a.appspot.com",
    messagingSenderId: "484002439348",
    appId: "1:484002439348:web:c4deaa98bd83a8b29537e1"
  };
  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);
  let firebaseAuth = firebaseApp.auth()
  let firebaseDb = firebaseApp.database()

  export { firebaseAuth, firebaseDb}

import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDS48r6dlPD_sA4IV6vqfF_lU6WG5SA_8I",
    authDomain: "react-crud-3a057.firebaseapp.com",
    databaseURL: "https://react-crud-3a057.firebaseio.com",
    projectId: "react-crud-3a057",
    storageBucket: "react-crud-3a057.appspot.com",
    messagingSenderId: "463029542431",
    appId: "1:463029542431:web:052f63fae7ec40fd22bf2a",
    measurementId: "G-D8XCK6QMLH"
  };
  // Initialize Firebase
  
  var fireDb=firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default fireDb.database().ref();
import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAHS9mo-W005liuL-YnhI7OirauWZSIXIM",
  authDomain: "barta-96aeb.firebaseapp.com",
  projectId: "barta-96aeb",
  storageBucket: "barta-96aeb.appspot.com",
  messagingSenderId: "664530197504",
  appId: "1:664530197504:web:3e1d7db524e937da3c4ce5"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

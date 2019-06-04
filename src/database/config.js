import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDYaVuVpIBDDSbQLK4wNYzF2SKKRXK2Hz8",
    authDomain: "photowall-e5230.firebaseapp.com",
    databaseURL: "https://photowall-e5230.firebaseio.com",
    projectId: "photowall-e5230",
    storageBucket: "photowall-e5230.appspot.com",
    messagingSenderId: "726190033409",
    appId: "1:726190033409:web:81e47f8c68236a02"
  };

firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const auth = firebase.auth()
var googleProvider = new firebase.auth.GoogleAuthProvider();

export {database, auth, googleProvider}
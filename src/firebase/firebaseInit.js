import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAzIBukYfto75PpVvx18gYVeAQxG-E0A3Y",
  authDomain: "invoices-stract-d8c6e.firebaseapp.com",
  projectId: "invoices-stract-d8c6e",
  storageBucket: "invoices-stract-d8c6e.appspot.com",
  messagingSenderId: "706261372865",
  appId: "1:706261372865:web:ad968a66247a9bc065a940",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

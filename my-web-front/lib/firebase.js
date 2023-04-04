import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXKQF1amLNEe6nCPn_o3xcX9d9dL-H9II",
  authDomain: "sheng-web.firebaseapp.com",
  databaseURL: "https://sheng-web-default-rtdb.firebaseio.com",
  projectId: "sheng-web",
  storageBucket: "sheng-web.appspot.com",
  messagingSenderId: "625914970142",
  appId: "1:625914970142:web:36061a5e162c78bddc6e0f",
  measurementId: "G-R0YP69XL39",
};

firebase.initializeApp(firebaseConfig);

export { firebase };

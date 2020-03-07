import firebase from "firebase";
import "firebase/firestore";

// firebase init goes here
const config = {
  apiKey: "AIzaSyBSc0NhEiXKZWqo8HzAx-_aTCM1mwBn6kw",
  authDomain: "makan-siang-klub.firebaseapp.com",
  databaseURL: "https://makan-siang-klub.firebaseio.com",
  projectId: "makan-siang-klub",
  storageBucket: "makan-siang-klub.appspot.com",
  messagingSenderId: "781702029664",
  appId: "1:781702029664:web:2433e53e373c86a8993e05",
  measurementId: "G-QM3HBS7RX8"
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
};
db.settings(settings);

// firebase collections
const usersCollection = db.collection("users");

export default { db, auth, currentUser, usersCollection };

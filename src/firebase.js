import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDqLBvlU2U9nfhykPbJ9ORGn9g7FiBZmRQ",
    authDomain: "azimio-kazi.firebaseapp.com",
    databaseURL: "https://azimio-kazi-default-rtdb.firebaseio.com",
    projectId: "azimio-kazi",
    storageBucket: "azimio-kazi.appspot.com",
    messagingSenderId: "862321007430",
    appId: "1:862321007430:web:eeee65edf20c48d771a347",
    measurementId: "G-XL5Q8TKRHR"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const types = firebase.firestore;

const arrayUnion = firebase.firestore.FieldValue.arrayUnion();

// collection references
const usersCollection = db.collection("users");
const businessCollection = db.collection("clients");
const adminCollections =db.collection("admins");
const capture = firebase.auth

// export utils/refs

export {
  db,
  auth,
  storage,
  types,
  arrayUnion,
  usersCollection,
  businessCollection,
  capture,
  adminCollections
};
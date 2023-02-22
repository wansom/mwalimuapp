import { initializeApp } from "firebase/app";
import { getFirestore,collection,arrayUnion } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDMsPInM58uPksNu3E9iQ5EhnWBz67CPeQ",
  authDomain: "scanpal-f74da.firebaseapp.com",
  databaseURL: "https://scanpal-f74da.firebaseio.com",
  projectId: "scanpal-f74da",
  storageBucket: "scanpal-f74da.appspot.com",
  messagingSenderId: "702443834173",
  appId: "1:702443834173:web:a4148356cf434a6fda1354",
  measurementId: "G-37KL0M4ESD"
};

const app =initializeApp(firebaseConfig);

// utils
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

const arrayunion = arrayUnion();

// collection references
const usersCollection = collection(db,"nigeria_lawyers");
const businessCollection = collection(db,"clients");
const adminCollections =collection(db,"admins");
const mpesaCollection =collection(db,"mpesa_responses");
const transactions = collection(db,"transactions");
const courtCollection= collection(db,"courts")

// export utils/refs

export {
  db,
  auth,
  storage,
  arrayunion,
  usersCollection,
  businessCollection,
  adminCollections,
  mpesaCollection,
  transactions,
  courtCollection
};
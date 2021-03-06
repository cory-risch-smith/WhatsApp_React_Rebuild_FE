import firebase from "firebase";
import Pusher from "pusher-js";
import axios from "./axios";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBawTwJ0Z2_ehUOPIHmNAOwpcG0R2tSRzk",
  authDomain: "whatsapp-mern-rebuild.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-rebuild.firebaseio.com",
  projectId: "whatsapp-mern-rebuild",
  storageBucket: "whatsapp-mern-rebuild.appspot.com",
  messagingSenderId: "1006593303076",
  appId: "1:1006593303076:web:021a2f6cfa93ee9ec6aeb1",
  measurementId: "G-6G4R887Q1L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

// FIX ME^^^^^^^^^^^^^^^
// Hook up to Mongo DB or pusher???

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

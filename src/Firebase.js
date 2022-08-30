import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaSuVgVq4hbzLqFKzr3OH_rdBWsFJRlIw",
  authDomain: "whats-app-clone-bdce4.firebaseapp.com",
  projectId: "whats-app-clone-bdce4",
  storageBucket: "whats-app-clone-bdce4.appspot.com",
  messagingSenderId: "236547284773",
  appId: "1:236547284773:web:e04e861be748e536cec4cc",
  measurementId: "G-N85MNY64EY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;

// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCc6noXP4mLqI8EKwuRX5meUtnWRkY--bM",
  authDomain: "finans-46833.firebaseapp.com",
  projectId: "finans-46833",
  storageBucket: "finans-46833.appspot.com",
  messagingSenderId: "363542295589",
  appId: "1:363542295589:web:63803fc5949800974dfbcc",
  measurementId: "G-GXWMBDYG57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

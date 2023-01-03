// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADcRRUCZM-Mnbo18XcBRyO-5ByyZw8kQY",
  authDomain: "real-estate-5ba2a.firebaseapp.com",
  projectId: "real-estate-5ba2a",
  storageBucket: "real-estate-5ba2a.appspot.com",
  messagingSenderId: "232999564144",
  appId: "1:232999564144:web:7dafef1cd9f3d47a0fd5b5",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA35meDD4We3qajaGQl-GU25j-F_WzuoyY",
  authDomain: "real-estate-6fe70.firebaseapp.com",
  projectId: "real-estate-6fe70",
  storageBucket: "real-estate-6fe70.appspot.com",
  messagingSenderId: "649801111241",
  appId: "1:649801111241:web:e3b59204c9fe70892cdf18",
  measurementId: "G-BDD963NE97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();

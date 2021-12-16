// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1_LfothH4_N0dOkMY6sgwHqyBms6eDvo",
  authDomain: "boom-b4852.firebaseapp.com",
  projectId: "boom-b4852",
  storageBucket: "boom-b4852.appspot.com",
  messagingSenderId: "148877270620",
  appId: "1:148877270620:web:9a0194349755728c3ad099",
  measurementId: "G-H5QV9S6P21"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);


export {
  app,
  db,
  storage
}

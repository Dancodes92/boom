// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnbOFqmugJpl7Ift-antTq0B4NE3pduRo",
  authDomain: "boom2-fb832.firebaseapp.com",
  projectId: "boom2-fb832",
  storageBucket: "boom2-fb832.appspot.com",
  messagingSenderId: "924371639466",
  appId: "1:924371639466:web:2987fe8ecef73681f284d3",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

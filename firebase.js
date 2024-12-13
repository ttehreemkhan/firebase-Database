// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ3iQDEtbyimnZgt1csRGO-UgwQ8KgGGM",
  authDomain: "fire-database-47f0a.firebaseapp.com",
  projectId: "fire-database-47f0a",
  storageBucket: "fire-database-47f0a.firebasestorage.app",
  messagingSenderId: "385078208317",
  appId: "1:385078208317:web:b9cfecaf0306913d4d4754",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };

// /src/services/firebase.js - MIGRATED

// Import statements now use the modern ES Module syntax
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// This is your production-ready Firebase configuration.
const firebaseConfig = {
  apiKey: "AIzaSyADaoyNEBjUIfFuHXxyCdviUr2Zxrw4ox4",
  authDomain: "nexus-academy-fe605.firebaseapp.com",
  projectId: "nexus-academy-fe605",
  storageBucket: "nexus-academy-fe605.appspot.com",
  messagingSenderId: "452930306032",
  appId: "1:452930306032:web:8b15c4bbdb92f5cb98e735",
  measurementId: "G-136E2B6XZV",
};

// Initialize the Firebase app
const app = initializeApp(firebaseConfig);

// Initialize and export the core services for other files to use.
export const auth = getAuth(app);
export const db = getFirestore(app);

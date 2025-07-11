// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzCXUqa8LT8J3dsgrTFhufQ7us4ksT1gI",
  authDomain: "komposid-3fc5b.firebaseapp.com",
  projectId: "komposid-3fc5b",
  storageBucket: "komposid-3fc5b.appspot.com",
  messagingSenderId: "299033658119",
  appId: "1:299033658119:web:ac8b3d720a7f5e6497bba2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

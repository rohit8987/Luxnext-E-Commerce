// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5MZRYhozXgern1xSgqtD0_KDkc4xqsgs",
  authDomain: "luxnest-web.firebaseapp.com",
  projectId: "luxnest-web",
  storageBucket: "luxnest-web.firebasestorage.app",
  messagingSenderId: "123089720784",
  appId: "1:123089720784:web:9a5b2d6fb6c407f38855d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB , auth};
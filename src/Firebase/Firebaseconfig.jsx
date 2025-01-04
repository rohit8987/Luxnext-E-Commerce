// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3yyiI1dyGeS6T2_bGBO90YMh0gNIKOEY",
  authDomain: "luxnest-323c1.firebaseapp.com",
  projectId: "luxnest-323c1",
  storageBucket: "luxnest-323c1.firebasestorage.app",
  messagingSenderId: "965793169040",
  appId: "1:965793169040:web:294add401a8d6c242fe215"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB , auth};

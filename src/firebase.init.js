// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsgLSUD-SMDvYn0NXXwvH3WFTV-1kDB_M",
  authDomain: "loginpage-df47f.firebaseapp.com",
  projectId: "loginpage-df47f",
  storageBucket: "loginpage-df47f.firebasestorage.app",
  messagingSenderId: "1060674116670",
  appId: "1:1060674116670:web:25682870decbf5c9a6456f",
  measurementId: "G-B2QCH9F2YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
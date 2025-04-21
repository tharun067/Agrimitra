// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCagsxy-uOybhRpDfPNHZDoz7Re6goB0zg",
  authDomain: "plant-disease-cdd29.firebaseapp.com",
  projectId: "plant-disease-cdd29",
  storageBucket: "plant-disease-cdd29.firebasestorage.app",
  messagingSenderId: "868604884554",
  appId: "1:868604884554:web:98ae40c1b8ced1b58ed8b3",
  measurementId: "G-9BVNN60NR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "you firebase api key",
  authDomain: "your firebase auth domain",
  projectId: "your firebase project id",
  storageBucket: "your firebase storage bucket",
  messagingSenderId: "your firebase messaging sender id",
  appId: "your firebase app id",
  measurementId: "your firebase measurement id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
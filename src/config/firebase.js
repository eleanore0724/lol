// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzg7sEQCu895osU2qwyzVw75lddeSC-fQ",
  authDomain: "console-b41b4.firebaseapp.com",
  databaseURL: "https://console-b41b4-default-rtdb.firebaseio.com",
  projectId: "console-b41b4",
  storageBucket: "console-b41b4.appspot.com",
  messagingSenderId: "492414527746",
  appId: "1:492414527746:web:cb1d07a37e1c6e6011ba1b",
  measurementId: "G-YJQSW52NCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
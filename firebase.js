// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVKHuciAfrTQofzVIFFu70g1VK_7fkHzA",
  authDomain: "multitechelectronics-fbf7d.firebaseapp.com",
  projectId: "multitechelectronics-fbf7d",
  storageBucket: "multitechelectronics-fbf7d.appspot.com",
  messagingSenderId: "213392052317",
  appId: "1:213392052317:web:308c856decc0cb4bbc7db4",
  measurementId: "G-KXZ6Z6D1YF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
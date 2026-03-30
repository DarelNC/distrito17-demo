// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqyf7TNGiCnSOSSEVLR8i1uel12tCkKTs",
  authDomain: "distrito17-demo.firebaseapp.com",
  projectId: "distrito17-demo",
  storageBucket: "distrito17-demo.firebasestorage.app",
  messagingSenderId: "490375843975",
  appId: "1:490375843975:web:34b6feb62b491c413da822",
  measurementId: "G-3J7K62BB84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7ZmMZc2LHmfoDXhefNmqgE4T-IvDqH6Y",
  authDomain: "portfolio-project-8f6e5.firebaseapp.com",
  databaseURL: "https://portfolio-project-8f6e5-default-rtdb.firebaseio.com",
  projectId: "portfolio-project-8f6e5",
  storageBucket: "portfolio-project-8f6e5.firebasestorage.app",
  messagingSenderId: "192318660766",
  appId: "1:192318660766:web:5153812f942bad3e411b8f",
  measurementId: "G-DW9X7JH9CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

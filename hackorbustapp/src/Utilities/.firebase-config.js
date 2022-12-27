// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMHbfFpwrjPzNHCEYv-6Qmdra8l3FmmO8",
  authDomain: "hackorbust.firebaseapp.com",
  projectId: "hackorbust",
  storageBucket: "hackorbust.appspot.com",
  messagingSenderId: "865854640486",
  appId: "1:865854640486:web:831afd097565f009c478a7",
  measurementId: "G-Z906346RKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgZ29JSYHRsEyYzRFR500_t2fCBDhmOtI",
  authDomain: "hotstar-87fcf.firebaseapp.com",
  projectId: "hotstar-87fcf",
  storageBucket: "hotstar-87fcf.firebasestorage.app",
  messagingSenderId: "1096891954652",
  appId: "1:1096891954652:web:50730b48040a9490adcb19",
  measurementId: "G-GKZ7ZM0EG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAgZ29JSYHRsEyYzRFR500_t2fCBDhmOtI",
  authDomain: "hotstar-87fcf.firebaseapp.com",
  projectId: "hotstar-87fcf",
  storageBucket: "hotstar-87fcf.firebasestorage.app",
  messagingSenderId: "1096891954652",
  appId: "1:1096891954652:web:50730b48040a9490adcb19",
  measurementId: "G-GKZ7ZM0EG2"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
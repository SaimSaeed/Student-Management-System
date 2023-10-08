// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1lY_4AIjRpC5hJIBqHwDfrJtA8f_LCNo",
  authDomain: "student-management-app-3e226.firebaseapp.com",
  projectId: "student-management-app-3e226",
  storageBucket: "student-management-app-3e226.appspot.com",
  messagingSenderId: "206939975246",
  appId: "1:206939975246:web:4fc8adc3b5582789e2dd1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
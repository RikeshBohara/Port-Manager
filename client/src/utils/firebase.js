// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "portmanager-b791f.firebaseapp.com",
  projectId: "portmanager-b791f",
  storageBucket: "portmanager-b791f.appspot.com",
  messagingSenderId: "638086535459",
  appId: "1:638086535459:web:696ea28042ddb6533d1496",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

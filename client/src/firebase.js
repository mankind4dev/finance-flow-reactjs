// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREASE_API_KEY,
  authDomain: "real-castle.firebaseapp.com",
  projectId: "real-castle",
  storageBucket: "real-castle.appspot.com",
  messagingSenderId: "765755101330",
  appId: "1:765755101330:web:89bf2c9305a8a4c80ed64b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
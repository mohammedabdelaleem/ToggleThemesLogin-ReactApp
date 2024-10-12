// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtZTNEdBvFLCUknoFip1C22HMUu9MFw3w",
  authDomain: "reactl2-1249d.firebaseapp.com",
  projectId: "reactl2-1249d",
  storageBucket: "reactl2-1249d.appspot.com",
  messagingSenderId: "1091758124243",
  appId: "1:1091758124243:web:16542edd65379a058bf826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
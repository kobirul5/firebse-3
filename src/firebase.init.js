// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOidOZSMvjchcCsYPQowYcrMTW9-5cMHM",
  authDomain: "module3-webpage.firebaseapp.com",
  projectId: "module3-webpage",
  storageBucket: "module3-webpage.firebasestorage.app",
  messagingSenderId: "932124116986",
  appId: "1:932124116986:web:bedc1e2aa2e9d42ff60643"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
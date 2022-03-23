// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAgWOoscrAa0-xj65SiOhpYHUwvSMzmig",
    authDomain: "gym-marvel.firebaseapp.com",
    projectId: "gym-marvel",
    storageBucket: "gym-marvel.appspot.com",
    messagingSenderId: "213719977616",
    appId: "1:213719977616:web:fcd09ef68263b09c60d215"
  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app); 
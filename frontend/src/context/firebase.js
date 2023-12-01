// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgdvfqZO7fgn-5rRUZKZx0MOxp9d-FqeE",
  authDomain: "twitter-1d9ba.firebaseapp.com",
  projectId: "twitter-1d9ba",
  storageBucket: "twitter-1d9ba.appspot.com",
  messagingSenderId: "920723101527",
  appId: "1:920723101527:web:d044f412f9e23514b61012",
  measurementId: "G-JKKBR10952"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);

export default app;
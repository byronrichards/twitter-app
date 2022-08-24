// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP7pzrnH0Y82w8mgLIT33wsCSgtKZBHtE",
  authDomain: "twitter-2464b.firebaseapp.com",
  projectId: "twitter-2464b",
  storageBucket: "twitter-2464b.appspot.com",
  messagingSenderId: "424293345696",
  appId: "1:424293345696:web:6ee58e7112bc519a5a9cc5",
  measurementId: "G-Q8SL8F3J5K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK6wuUg3rZB9QxD0IGkwTemYF3Lvfbd8U",
  authDomain: "chat-app-3a0cb.firebaseapp.com",
  projectId: "chat-app-3a0cb",
  storageBucket: "chat-app-3a0cb.appspot.com",
  messagingSenderId: "476573600051",
  appId: "1:476573600051:web:e0a8a5352a74008af89646",
  measurementId: "G-FGE4PPJFZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
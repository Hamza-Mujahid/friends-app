import { initializeApp } from "firebase/app";
import { getAuth } from '@firebase/auth';
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxRG7IX1gIwTUW5_rCWIddOIxpS3_cRwo",
  authDomain: "friends-app-d384a.firebaseapp.com",
  projectId: "friends-app-d384a",
  storageBucket: "friends-app-d384a.appspot.com",
  messagingSenderId: "458551180979",
  appId: "1:458551180979:web:012fb8a7593753d7ef3ac6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

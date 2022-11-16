import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjmqLE3Y8mXRT0a8_bkd0nK0k5Mgm2Ok4",
  authDomain: "wechat-e3185.firebaseapp.com",
  projectId: "wechat-e3185",
  storageBucket: "wechat-e3185.appspot.com",
  messagingSenderId: "426969435424",
  appId: "1:426969435424:web:f79a712d3e997902f61b45"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

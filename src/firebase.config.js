import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMo-9SUNKKeUbVHulEOIcPJEQnZStOEEs",
  authDomain: "house-market-app-2ee2b.firebaseapp.com",
  projectId: "house-market-app-2ee2b",
  storageBucket: "house-market-app-2ee2b.appspot.com",
  messagingSenderId: "73696921698",
  appId: "1:73696921698:web:99055bf7fcf3228b67693b",
};

initializeApp(firebaseConfig);
export const db = getFirestore();

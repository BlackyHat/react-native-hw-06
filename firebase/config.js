import AsyncStorage from "@react-native-async-storage/async-storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNb7w6cndvi77kddRRo9eZEv1UACmafbY",
  authDomain: "react-native-mob-app.firebaseapp.com",
  projectId: "react-native-mob-app",
  storageBucket: "react-native-mob-app.appspot.com",
  messagingSenderId: "45188880389",
  appId: "1:45188880389:web:57a4d6228db5bc2e37a46c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore(app);
export const storage = getStorage(app);

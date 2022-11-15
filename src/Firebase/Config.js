// Import the functions you need fm the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvs9x1nHJ8DAIcvpoMroBMgeMMKBQPE9s",
  authDomain: "co-mingle.firebaseapp.com",
  projectId: "co-mingle",
  storageBucket: "co-mingle.appspot.com",
  messagingSenderId: "688833425347",
  appId: "1:688833425347:web:cc1aa3de5269d0d3c1d776",
  databaseURL: "https://co-mingle-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app

export const auth= getAuth()

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
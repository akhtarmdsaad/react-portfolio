import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "portfolio-b91fb.firebaseapp.com",
  projectId: "portfolio-b91fb",
  storageBucket: "portfolio-b91fb.appspot.com",
  messagingSenderId: "675137988738",
  appId: "1:675137988738:web:7b52a82bd3ccbce0806c9b",
  measurementId: "G-7S2C3KNM15"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
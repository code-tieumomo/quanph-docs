import * as firebase from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getDatabase(app);

export const logout = (afterAction = () => {}) => {
  signOut(auth).then((r) => {
    afterAction(null);
  });
};

export const loginWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.log(error);
  }
};

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
export const firebaseConfig = {
  apiKey: "AIzaSyAk1ktOGvYBO5N-cTVCR8068EouG_aMq6U",
  authDomain: "personal-website-e5fa7.firebaseapp.com",
  projectId: "personal-website-e5fa7",
  storageBucket: "personal-website-e5fa7.appspot.com",
  messagingSenderId: "411119889921",
  appId: "1:411119889921:web:066f06dae5eeee0eb15a00",
  measurementId: "G-2W6N49G8ZK",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const firebaseAuth = getAuth(app);
export const firebaseStorage = getStorage(app);

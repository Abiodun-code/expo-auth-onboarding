// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB98g11xtUXRy7gLq8RQgYsrpWEHGfbf24",
  authDomain: "expo-auths.firebaseapp.com",
  projectId: "expo-auths",
  storageBucket: "expo-auths.appspot.com",
  messagingSenderId: "1090912733177",
  appId: "1:1090912733177:web:0f76645c6908aecea75f28"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

export const authentification = getAuth(app);

export const provider: GoogleAuthProvider = new GoogleAuthProvider();
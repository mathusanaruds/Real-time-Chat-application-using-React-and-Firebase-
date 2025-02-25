import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4UyDmGsen-tHqn_8JK5hi7570NpHtDHw",
  authDomain: "chat-d24f6.firebaseapp.com",
  projectId: "chat-d24f6",
  storageBucket: "chat-d24f6.appspot.com",
  messagingSenderId: "306563092294",
  appId: "1:306563092294:web:09b259cb2dfde5b9881f47",
  measurementId: "G-H74S00GEH1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // ✅ Make sure the app instance is passed
export const storage = getStorage(app);
export const db = getFirestore(app);

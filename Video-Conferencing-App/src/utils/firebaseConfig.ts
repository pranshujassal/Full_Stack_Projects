import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC5oT8qQ9OY2HD-wx41dV7o4jj_3gdPW7c",
  authDomain: "zoom-clone-22c6c.firebaseapp.com",
  projectId: "zoom-clone-22c6c",
  storageBucket: "zoom-clone-22c6c.appspot.com",
  messagingSenderId: "978508967802",
  appId: "1:978508967802:web:978a45583fa509cd8c30c3",
  measurementId: "G-Z2W6GKH1MJ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");

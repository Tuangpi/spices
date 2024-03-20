import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAG4uMdPWixg-13H1fKjINleZSAnfbREHw",
    authDomain: "myanmarspice.firebaseapp.com",
    projectId: "myanmarspice",
    storageBucket: "myanmarspice.appspot.com",
    messagingSenderId: "169766726308",
    appId: "1:169766726308:web:45e02b4aa2a9216b4c5431"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };

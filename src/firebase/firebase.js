import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBuhJavPsGCsAulWJzefa-4AhrBu3PC4_E",
    authDomain: "spice-of-myanmar-9d53a.firebaseapp.com",
    projectId: "spice-of-myanmar-9d53a",
    storageBucket: "spice-of-myanmar-9d53a.appspot.com",
    messagingSenderId: "606295769180",
    appId: "1:606295769180:web:2ce20e5fe047dac2df2699"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };

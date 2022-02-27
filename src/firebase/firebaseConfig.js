import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDlqy9jJTBElnzP_IF2th8t__zxKpuNP60",
    authDomain: "recetas-ccb7c.firebaseapp.com",
    projectId: "recetas-ccb7c",
    storageBucket: "recetas-ccb7c.appspot.com",
    messagingSenderId: "694140779924",
    appId: "1:694140779924:web:13c7bb12ffcd7c1fe3e381"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();

export {
    app,
    google,
    db
}
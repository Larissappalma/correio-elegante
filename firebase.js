import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnjW7K9a1FgTEjMcSd6WD9DsrF7WjSct0",
  authDomain: "correio-elegante-f021c.firebaseapp.com",
  projectId: "correio-elegante-f021c",
  storageBucket: "correio-elegante-f021c.firebasestorage.app",
  messagingSenderId: "152393317232",
  appId: "1:152393317232:web:3ba80579c7e33ae1d96db5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, query, where, getDocs };
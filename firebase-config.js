// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC6cIoc_xfZQq4Nqm8mGQ8YnNO_UjE93uM",
    authDomain: "my-bd1-2150c.firebaseapp.com",
    projectId: "my-bd1-2150c",
    storageBucket: "my-bd1-2150c.firebasestorage.app",
    messagingSenderId: "755243371902",
    appId: "1:755243371902:web:cdd72c4d1cae265fd1b72f",
    measurementId: "G-T09N32TS17"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

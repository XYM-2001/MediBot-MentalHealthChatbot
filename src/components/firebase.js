// src/components/SignUp/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    authDomain: "mentalhealthbot-429020.firebaseapp.com",
    projectId: "mentalhealthbot-429020",
    storageBucket: "mentalhealthbot-429020.appspot.com",
    messagingSenderId: "912016496473",
    appId: "1:912016496473:web:a54534d914a52c87ec9e48",
    measurementId: "G-FJDWT97HVE"
};;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
// src/components/SignUp/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDG95JiKJ9sJTxte3mkJ3ktuTWlXSF5OHQ",
    authDomain: "mentalhealthbot-429020.firebaseapp.com",
    projectId: "mentalhealthbot-429020",
    storageBucket: "mentalhealthbot-429020.appspot.com",
    messagingSenderId: "912016496473",
    appId: "1:912016496473:web:a54534d914a52c87ec9e48",
    measurementId: "G-FJDWT97HVE"
};;

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAPOocHCJxVGBER-rcBv1KUY18JCrdtx38",
    authDomain: "things-return.firebaseapp.com",
    projectId: "things-return",
    storageBucket: "things-return.appspot.com",
    messagingSenderId: "349738361019",
    appId: "1:349738361019:web:a9620e27074ce2be46099e",
    measurementId: "G-1C38Z801TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const initAuth = (loginCallback, logoutCallback) => {
    onAuthStateChanged(auth, (userData) => {
        if (userData) {
            loginCallback(userData)
        } else {
            logoutCallback()
        }
    });
}


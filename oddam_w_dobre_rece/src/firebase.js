import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBCexdrArtRxTuzOUXIVYjgUydMku2yJio",
    authDomain: "return-things.firebaseapp.com",
    projectId: "return-things",
    storageBucket: "return-things.appspot.com",
    messagingSenderId: "95955133894",
    appId: "1:95955133894:web:9f40d7bba3d02012787ec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);



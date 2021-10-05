// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQOVhmMSs7nKA45Nno5uh7arcEqPxp9Mk",
    authDomain: "sparta-react-basic-684a9.firebaseapp.com",
    projectId: "sparta-react-basic-684a9",
    storageBucket: "sparta-react-basic-684a9.appspot.com",
    messagingSenderId: "131845026299",
    appId: "1:131845026299:web:c1ac812891ccba2d3f1b5e",
    measurementId: "G-9Q5SCCVYKK"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();

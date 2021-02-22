import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCxWSvT334PtKJW_45qiytkS8WnNvoomc8",
    authDomain: "clone-61cce.firebaseapp.com",
    projectId: "clone-61cce",
    storageBucket: "clone-61cce.appspot.com",
    messagingSenderId: "217964827577",
    appId: "1:217964827577:web:fce8e64a785ecb0c92dc68",
    measurementId: "G-FET694YTKB"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }
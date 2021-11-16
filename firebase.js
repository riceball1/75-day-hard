import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// firebase init
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAP0rAezosVqK29a4nWkIvVjwqrBjfHXqU",
    authDomain: "hard-challenge.firebaseapp.com",
    databaseURL: "https://hard-challenge-default-rtdb.firebaseio.com",
    projectId: "hard-challenge",
    storageBucket: "hard-challenge.appspot.com",
    messagingSenderId: "126631369685",
    appId: "1:126631369685:web:a31c79b698b74661abfb5c",
    measurementId: "G-65H2RB7PTG"
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection('users')

export {
    db,
    auth,
    usersCollection,
}
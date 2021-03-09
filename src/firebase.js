//import firebase module
import firebase from 'firebase/app'
//import the database info from the firebase module

import 'firebase/database'
//Initialize Firebase 
const firebaseConfig = {
    apiKey: "AIzaSyDvEVhiFgToqleLHWk-Iv8ZVpnotg8E0s0",
    authDomain: "project-3-7796a.firebaseapp.com",
    databaseURL: "https://project-3-7796a-default-rtdb.firebaseio.com",
    projectId: "project-3-7796a",
    storageBucket: "project-3-7796a.appspot.com",
    messagingSenderId: "234590242310",
    appId: "1:234590242310:web:ff6f07a7a99e330942e587"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//exporting our configured firebase app
export default firebase
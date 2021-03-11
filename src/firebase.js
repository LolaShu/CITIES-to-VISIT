import firebase from "firebase/app"

import "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyDvEVhiFgToqleLHWk-Iv8ZVpnotg8E0s0",
    authDomain: "project-3-7796a.firebaseapp.com",
    databaseURL: "https://project-3-7796a-default-rtdb.firebaseio.com",
    projectId: "project-3-7796a",
    storageBucket: "project-3-7796a.appspot.com",
    messagingSenderId: "234590242310",
    appId: "1:234590242310:web:ff6f07a7a99e330942e587"
};

firebase.initializeApp(firebaseConfig);

export default firebase
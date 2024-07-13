
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";



const firebaseConfig = {
    apiKey: "AIzaSyBVb0KzKHWnvQ8wBufcTiZOg3yZXp6pPQk",
    authDomain: "linkedinclone-9d996.firebaseapp.com",
    projectId: "linkedinclone-9d996",
    storageBucket: "linkedinclone-9d996.appspot.com",
    messagingSenderId: "572050532258",
    appId: "1:572050532258:web:f6c1c365203e2bc06af4fb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

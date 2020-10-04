import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyANgOiQ_zrylOT7BE88k_PUftDWvIJLyY8",
    authDomain: "freelancer-clone.firebaseapp.com",
    databaseURL: "https://freelancer-clone.firebaseio.com",
    projectId: "freelancer-clone",
    storageBucket: "freelancer-clone.appspot.com",
    messagingSenderId: "385363868308",
    appId: "1:385363868308:web:50a4f217d67330f4275281",
    measurementId: "G-C1SD2HZK5W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
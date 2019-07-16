import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCGpvEzRH6K02UxdA5Bk5xZeUhj9ABjyPQ",
    authDomain: "ittisa.firebaseapp.com",
    databaseURL: "https://ittisa.firebaseio.com",
    projectId: "ittisa",
    storageBucket: "ittisa.appspot.com",
    messagingSenderId: "47907357246",
    appId: "1:47907357246:web:fe184c76342564ca"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
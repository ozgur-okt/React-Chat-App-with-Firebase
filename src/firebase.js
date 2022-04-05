import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: [your info],
    authDomain: [your info],
    projectId: [your info],
    storageBucket: [your info],
    messagingSenderId: [your info],
    appId: [your info],
    measurementId: [your info]
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }

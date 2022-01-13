import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD6FFx4dLVqPRZEM6fjMsYaLrPCIp6BSs0",
    authDomain: "firechat-47ea5.firebaseapp.com",
    projectId: "firechat-47ea5",
    storageBucket: "firechat-47ea5.appspot.com",
    messagingSenderId: "591526539321",
    appId: "1:591526539321:web:17f336c695cda43d451de8",
    measurementId: "G-ZPS1CFRNSE"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
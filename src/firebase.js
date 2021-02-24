import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAaKB_GLmjUUcYYC1vGdgFrSH-FU6ZAlwE",
    authDomain: "crud-df074.firebaseapp.com",
    projectId: "crud-df074",
    storageBucket: "crud-df074.appspot.com",
    messagingSenderId: "244074598187",
    appId: "1:244074598187:web:4d56e4a352c268d7303f6e"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAGKzu9E1w_kCKKraMkJPrH-HgHohWPi3M",

  authDomain: "adpost1198.firebaseapp.com",

  projectId: "adpost1198",

  storageBucket: "adpost1198.appspot.com",

  messagingSenderId: "454461817519",

  appId: "1:454461817519:web:d4143aeb13d055493aca5a",

  measurementId: "G-HK70RE7K7X"

  };

  export const Firebase= firebase.initializeApp(firebaseConfig)
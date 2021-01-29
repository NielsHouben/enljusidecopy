import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
  .initializeApp({ databaseURL: 'https://fiket-11837-default-rtdb.europe-west1.firebasedatabase.app/' })
  .database()
import firebase from 'firebase/compat/app';
import "firebase/compat/database"

const config = {
  apiKey: "AIzaSyA0jKfOBTSsYqFctcLcTV4SWoqXgqKlj1w",
  authDomain: "firechat-7c266.firebaseapp.com",
  projectId: "firechat-7c266",
  storageBucket: "firechat-7c266.appspot.com",
  messagingSenderId: "1042036027940",
  appId: "1:1042036027940:web:27665ef53ea54f16975eb1"
}

const db = firebase.initializeApp(config);
export default db;
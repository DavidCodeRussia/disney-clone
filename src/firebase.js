import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBS1rG7W1aQ6sB2cKt4yjdmG6r5H33px78",
  authDomain: "disney-88676.firebaseapp.com",
  projectId: "disney-88676",
  storageBucket: "disney-88676.appspot.com",
  messagingSenderId: "980118341159",
  appId: "1:980118341159:web:e6cb6af3bf570f38847002",
  measurementId: "G-QV8T14Q576",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

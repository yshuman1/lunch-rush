import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDWKRtSUN-qDYndlb7VIt28QnQt7Qs2r2Y",
  authDomain: "lunch-rush-1036c.firebaseapp.com",
  databaseURL: "https://lunch-rush-1036c.firebaseio.com",
  projectId: "lunch-rush-1036c",
  storageBucket: "lunch-rush-1036c.appspot.com",
  messagingSenderId: "854565024554"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

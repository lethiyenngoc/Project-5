import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEFlYHMKYhG3OX6hsjPPKEwlCNonugn7w",
  authDomain: "project-5-b4cf2.firebaseapp.com",
  databaseURL: "https://project-5-b4cf2-default-rtdb.firebaseio.com",
  projectId: "project-5-b4cf2",
  storageBucket: "project-5-b4cf2.appspot.com",
  messagingSenderId: "1083414738552",
  appId: "1:1083414738552:web:2c5ee07eac985f67e99f8d"
};

const app = initializeApp(firebaseConfig);
const dbFirebase = getDatabase(app);
const authFirebase = getAuth(app);

export { dbFirebase, authFirebase };
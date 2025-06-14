// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDes3ioeygnWBqJB6NnHb7xj732JJhOqm8",
  authDomain: "videofire-268ff.firebaseapp.com",
  databaseURL: "https://videofire-268ff-default-rtdb.firebaseio.com",
  projectId: "videofire-268ff",
  storageBucket: "videofire-268ff.appspot.com",
  messagingSenderId: "910374058927",
  appId: "1:910374058927:web:6add3afdea07cfa2914d5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const provider = new GoogleAuthProvider();

export { auth, provider, database };

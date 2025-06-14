// Firebase config already present
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
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

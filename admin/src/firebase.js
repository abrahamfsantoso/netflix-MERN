import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: 'netflix-mern-f7c04.firebaseapp.com',
  projectId: 'netflix-mern-f7c04',
  storageBucket: 'netflix-mern-f7c04.appspot.com',
  messagingSenderId: '287161505240',
  appId: '1:287161505240:web:0e852f47a702505b11cead',
  measurementId: 'G-ZHYQ1HD258',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;

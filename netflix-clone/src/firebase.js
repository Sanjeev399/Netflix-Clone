import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBeVNYO8W8sPQsuRTTMCPRYIuC08uOj8Zg",
  authDomain: "netflix-clone-3d0d1.firebaseapp.com",
  projectId: "netflix-clone-3d0d1",
  storageBucket: "netflix-clone-3d0d1.appspot.com",
  messagingSenderId: "992849720669",
  appId: "1:992849720669:web:1e8fa60726d4ad89e764b4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
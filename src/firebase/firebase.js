import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCVydtC_bgnxVDWn4isX8884Rwr9k-7ajk",
  authDomain: "effizient-assessment-633c6.firebaseapp.com",
  projectId: "effizient-assessment-633c6",
  storageBucket: "effizient-assessment-633c6.appspot.com",
  messagingSenderId: "236384107583",
  appId: "1:236384107583:web:304039cccf769b0407cc8a",
  measurementId: "G-TJNKEWTZ8N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase
const db = getFirestore();
export default db;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCiqtadS6kJeT9DP5vg8hNikqdgCQ74Gfs",
  authDomain: "site-9686c.firebaseapp.com",
  projectId: "site-9686c",
  storageBucket: "site-9686c.appspot.com",
  messagingSenderId: "529711415178",
  appId: "1:529711415178:web:cf5e62aac730009e389273",
  measurementId: "G-VK8M10QC65"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

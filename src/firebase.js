import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQpN_AtSw8PFdde-hSf9z0hLF2RCgOjJY",
  authDomain: "parley-8b275.firebaseapp.com",
  projectId: "parley-8b275",
  storageBucket: "parley-8b275.appspot.com",
  messagingSenderId: "339133256581",
  appId: "1:339133256581:web:574d0bac28e18804af6aec",
  measurementId: "G-89Y9VGKNF0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
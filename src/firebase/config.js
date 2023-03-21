// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw-O3diii-99L0J2KjB_SVS4ycngD7ZkE",
  authDomain: "mineblog-17b37.firebaseapp.com",
  projectId: "mineblog-17b37",
  storageBucket: "mineblog-17b37.appspot.com",
  messagingSenderId: "931102795117",
  appId: "1:931102795117:web:216d8da5c17b08429c6664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }; 


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoPIaaz3zu6N9gUU5-Yrfo2ERTk0QepNU",
  authDomain: "final-auth-6e360.firebaseapp.com",
  projectId: "final-auth-6e360",
  storageBucket: "final-auth-6e360.appspot.com",
  messagingSenderId: "949025793322",
  appId: "1:949025793322:web:d5aa2ab5474e31be0c6a53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

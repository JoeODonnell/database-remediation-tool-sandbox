// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";




// This below here is how you are connecting your React App to the databse. Where is this in the remediation service ms??

const firebaseConfig = {
  apiKey: "AIzaSyDM3fBFMDC7T5Q6LO0YOjvz9Ou7yUDInKI",
  authDomain: "remediation-tool.firebaseapp.com",
  projectId: "remediation-tool",
  storageBucket: "remediation-tool.appspot.com",
  messagingSenderId: "1045770089844",
  appId: "1:1045770089844:web:e4255d1fd58259a012a821",
  measurementId: "G-D5EPQL0REZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



// this is the file like you would uase to connect to S&R Database 

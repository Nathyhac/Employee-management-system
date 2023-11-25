import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyDUP47aqYsohrJiSuN8ISj2tzLCCC52IjA",
  authDomain: "employee-management-syst-b4dc8.firebaseapp.com",
  projectId: "employee-management-syst-b4dc8",
  storageBucket: "employee-management-syst-b4dc8.appspot.com",
  messagingSenderId: "333842832842",
  appId: "1:333842832842:web:d7601f9f49ad5b0dab0333"
};

const app = initializeApp(firebaseConfig);

export const employeeDb = getFirestore(app);




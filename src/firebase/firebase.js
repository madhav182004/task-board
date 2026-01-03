import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBWJSZax_BWq_bKP8SqqMqxD3MjCMuvnY",
  authDomain: "project-task-board-46753.firebaseapp.com",
  projectId: "project-task-board-46753",
  storageBucket: "project-task-board-46753.firebasestorage.app",
  messagingSenderId: "967796209364",
  appId: "1:967796209364:web:84d376643cbbfbea9f6d41"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

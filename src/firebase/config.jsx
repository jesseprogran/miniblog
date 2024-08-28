import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrQ2xCLMso7pR3Cd0rIS82jUudOniOuV4",
  authDomain: "jessecode-49b58.firebaseapp.com",
  projectId: "jessecode-49b58",
  storageBucket: "jessecode-49b58.appspot.com",
  messagingSenderId: "1010865516583",
  appId: "1:1010865516583:web:2f72eb73210ecb26205e02",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuDm7eYxiEtk24VKthALTMi5VQFDiT-EA",
  authDomain: "roverz-ai.firebaseapp.com",
  projectId: "roverz-ai",
  storageBucket: "roverz-ai.appspot.com",
  messagingSenderId: "477791245773",
  appId: "1:477791245773:web:502cdbaed5d34532dfa084"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };

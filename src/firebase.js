import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOaXQf5yXqUx4Rc_xBJyqmsRpnZ5rpEZI",
  authDomain: "portfolio-login-466e8.firebaseapp.com",
  projectId: "portfolio-login-466e8",
  storageBucket: "portfolio-login-466e8.appspot.com",
  messagingSenderId: "53784370685",
  appId: "1:53784370685:web:345f75be690715b8ed4d94"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };

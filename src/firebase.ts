import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDnECeKMUN6BqphdahE7QMlykUGVLlF5TI",
  authDomain: "mathcollab-63031.firebaseapp.com",
  databaseURL: "https://mathcollab-63031-default-rtdb.firebaseio.com",
  projectId: "mathcollab-63031",
  storageBucket: "mathcollab-63031.appspot.com",
  messagingSenderId: "154334055232",
  appId: "1:154334055232:web:582a1fc7653c01c3f188a5",
  measurementId: "G-MSRD2RHBQZ",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

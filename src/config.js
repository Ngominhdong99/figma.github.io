import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBl_4l0bozjPpYiINZUZb76t8gh9Kzwg_8",
  authDomain: "figma-project-3d243.firebaseapp.com",
  projectId: "figma-project-3d243",
  storageBucket: "figma-project-3d243.appspot.com",
  messagingSenderId: "148254782428",
  appId: "1:148254782428:web:f0501e8b738856b2f81519",
  measurementId: "G-FZ9LBRLJ4Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

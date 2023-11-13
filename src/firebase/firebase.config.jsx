import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.vite_apiKey,
  authDomain: import.meta.env.vite_authDomain,
  projectId: import.meta.env.vite_projectId,
  storageBucket: import.meta.env.vite_storageBucket,
  messagingSenderId: import.meta.env.vite_messagingSenderId,
  appId: import.meta.env.vite_appId,
};

const app = initializeApp(firebaseConfig);
export default app;

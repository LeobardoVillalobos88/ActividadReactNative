import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDcHQCkW38H6XxFe3fGkh1Yc8YjmcWqS30",
  authDomain: "tienda-utez-leobardo.firebaseapp.com",
  projectId: "tienda-utez-leobardo",
  storageBucket: "tienda-utez-leobardo.firebasestorage.app",
  messagingSenderId: "69263053611",
  appId: "1:69263053611:web:e17bd3ad4df813ce232b6e"
};
  
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCF3KM4LU14_JfZf5tzyei-RK6Q86Kt4ro",
  authDomain: "quiz-2-195b4.firebaseapp.com",
  databaseURL: "https://mad-quiz-02-default-rtdb.firebaseio.com",
  projectId: "quiz-2-195b4",
  storageBucket: "quiz-2-195b4.appspot.com",
  messagingSenderId: "270121061984",
  appId: "1:270121061984:web:1eec761fd621114ff43d05",
  measurementId: "G-QY4QGDX1EB"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// export const auth = getAuth(firebaseApp);
export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// change the rules of Storage as follows:

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if true;
//     }
//   }
// }
export const storage = getStorage(firebaseApp);

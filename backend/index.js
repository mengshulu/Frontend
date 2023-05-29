// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZvQUsq820RoWJkykVDUdfGFjNEi_byEk",
  authDomain: "moolo-d568c.firebaseapp.com",
  databaseURL: "https://moolo-d568c-default-rtdb.firebaseio.com",
  projectId: "moolo-d568c",
  storageBucket: "moolo-d568c.appspot.com",
  messagingSenderId: "181611786461",
  appId: "1:181611786461:web:01c449499eeee57525eb34",
  measurementId: "G-P0JDGSGMR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
console.log("firebase");

var db = getFirestore(app);
console.log(db)

const querySnapshot = await getDocs(collection(db, "meat"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  console.log(`${doc.id} => ${doc.data()}`);
});

// console.log(querySnapshot);



import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD4b8xPu4bbC_LSqlUToXgg-G2UQfmR_xs",
  authDomain: "learnflow-app.firebaseapp.com",
  projectId: "learnflow-app",
  storageBucket: "learnflow-app.appspot.com",
  messagingSenderId: "376196691656",
  appId: "1:376196691656:web:223ce22d86543c7364d7fd",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

// @ts-ignore
firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        resolve(user); 
      } else {
        reject('No hay usuario autenticado');
      }
    });
  });
};




export {auth, provider}

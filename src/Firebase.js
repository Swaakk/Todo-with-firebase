import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore" 


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMg7ZqPtEuooJ1gk0tP2ybSjQ_3PnnsnQ",
    authDomain: "todo-crud-ea7c8.firebaseapp.com",
    projectId: "todo-crud-ea7c8",
    storageBucket: "todo-crud-ea7c8.appspot.com",
    messagingSenderId: "965179489102",
    appId: "1:965179489102:web:d7b663d440d309163b7c1f",
    measurementId: "G-W54RJHP1DP"
  };



  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  export {db};
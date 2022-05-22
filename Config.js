import {initializeApp}from "firebase/app"
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";





const firebaseConfig = {
    apiKey: "AIzaSyDK18iya6zId9cFinpi3qgBL1fAsyrebAs",
    authDomain: "ecomerence-79bf1.firebaseapp.com",
    projectId: "ecomerence-79bf1",
    storageBucket: "ecomerence-79bf1.appspot.com",
    messagingSenderId: "316686614812",
    appId: "1:316686614812:web:561fe0fb9d4078cb7d7ad9"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
const auth=getAuth(app)
 export{db,auth}






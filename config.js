import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig=process.env.firebaseConfig



  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export{firebase};
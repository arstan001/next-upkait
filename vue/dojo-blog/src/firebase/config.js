import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAjFqEfDZp2QKjCLWI-DAmNqeSSeftZqJs",
    authDomain: "udemy-vue-firebase-3ac92.firebaseapp.com",
    projectId: "udemy-vue-firebase-3ac92",
    storageBucket: "udemy-vue-firebase-3ac92.appspot.com",
    messagingSenderId: "827919410405",
    appId: "1:827919410405:web:a5465c6ae9706779bf200c"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);

  //init firestore service
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp


  export { projectFirestore, timestamp}
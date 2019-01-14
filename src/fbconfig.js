import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAiUQVQdrxgEtF6hOT1Ljdy3jXaqi1PReI",
  authDomain: "certificados-6cf19.firebaseapp.com",
  databaseURL: "https://certificados-6cf19.firebaseio.com",
  projectId: "certificados-6cf19",
  storageBucket: "certificados-6cf19.appspot.com",
  messagingSenderId: "41356627409"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase

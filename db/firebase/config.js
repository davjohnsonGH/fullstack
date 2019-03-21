import firebase from 'firebase/app';
import 'firebase/firestore';
  // insert fireBase config object

  firebase.initializeApp(config);

  export const firestore = firebase.firestore();

  export default firebase;

import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBjEF6JGCwYFgWHKOT-M_lZeQxRjKs5V38",
    authDomain: "himalaya-salt-room.firebaseapp.com",
    projectId: "himalaya-salt-room",
    storageBucket: "himalaya-salt-room.appspot.com",
    messagingSenderId: "882056572913",
    appId: "1:882056572913:web:b229cd9a8e1c1f26139e50",
    measurementId: "G-GK5YEE5TPK"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }


  firebase.auth().onAuthStateChanged((user) =>{
    if(user){
      console.log('Logged In:');
      console.log(user);
    }else{
      console.log('Logged Out:');
    }
  })
export default firebase;

export const auth = firebase.auth();


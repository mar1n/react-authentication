import React from 'react';
import * as firebase from 'firebase';
const Home = () => (
    <div>
      {firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(firebase.auth())
  } else {
    // No user is signed in.
    console.log('out')
  }
})}
    </div>
  );
  export default Home;
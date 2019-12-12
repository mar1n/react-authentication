import React from 'react';
import * as firebase from 'firebase';
const Landing = () => (
    <div>
      <h1>Langing</h1>
      {console.log(firebase.auth().currentUser) }
    </div>
  );
  export default Landing;
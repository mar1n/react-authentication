import app from 'firebase/app';
import 'firebase/auth';


const config = {
  apiKey: 'AIzaSyDWKTWHnhGCXvEbFZwZfeb736A-vP4ym4M',
  authDomain: 'szymonfire.firebaseapp.com',
  databaseURL: 'https://szymonfire.firebaseio.com',
  projectId: 'szymonfire',
  storageBucket: 'szymonfire.appspot.com',
  messagingSenderId: '1094968094635',
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
}

export default Firebase;
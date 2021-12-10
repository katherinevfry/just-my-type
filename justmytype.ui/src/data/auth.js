import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { createNewUser, getUserByFBKey } from './userData';

const getFirebaseKey = () => firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    return user.uid;
  }
  return console.warn('no user logged in.');
});

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((user) => {
    getUserByFBKey(user.user?.uid).then(() => {
    
        const userInfo = {
          FirebaseKey: user.user?.uid,
          FullName: user.user?.displayName
         }
        createNewUser(userInfo);

    });
  });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
  window.location.href = '/';
});

export { getFirebaseKey, signInUser, signOutUser };

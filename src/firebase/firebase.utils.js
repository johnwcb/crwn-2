import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDwAGUy--28RGA0G7mQBLz2zrNcNF2I1lU",
    authDomain: "crwn-db-55225.firebaseapp.com",
    databaseURL: "https://crwn-db-55225.firebaseio.com",
    projectId: "crwn-db-55225",
    storageBucket: "crwn-db-55225.appspot.com",
    messagingSenderId: "58530600689",
    appId: "1:58530600689:web:a3647a540fb9ec717efb50"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return null;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set(
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
            )
        } catch (error) {
            console.log('error creating user', error.message);
        }
    } 
  
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
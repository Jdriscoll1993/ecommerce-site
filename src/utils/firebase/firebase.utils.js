import { initializeApp } from 'firebase/app';

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc

} from 'firebase/firestore'

//config for CRUD actions to instance of firebase
const firebaseConfig = {
    apiKey: "AIzaSyAXuMGYITgbyYLYIp9VcQZ_laTbvP-hi4U",
    authDomain: "ecommerce-site-db-6408a.firebaseapp.com",
    projectId: "ecommerce-site-db-6408a",
    storageBucket: "ecommerce-site-db-6408a.appspot.com",
    messagingSenderId: "830151642001",
    appId: "1:830151642001:web:90336f375bbba4132c6830",
    measurementId: "G-GH6BGWYZ5F"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    console.log(userAuth);
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    //check if snapshot exists and if not create the user in db
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const  createdAt  = new Date();
        try {
            //set the doc with this object
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;
}

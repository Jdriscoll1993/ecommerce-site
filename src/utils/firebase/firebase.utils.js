import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signOut,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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

export const auth = getAuth();
console.log(auth);
//generate a provider 
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});


export const db = getFirestore();

// SIGN IN USER 

//add additional auth providers as needed
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// SIGN OUT USER

signOut(auth).then(() => {
    //sign-out success
}).catch((error) => {
    console.log('Error signing out: ', error.message, error.code);
})

//CREATE USER

//asynchronously create document references for signing in and signing out users
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInfo = { displayName: 'default display name' }
) => {
    if (!userAuth) return;

    console.log(userAuth);

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    //check if snapshot exists and if not create the user in db
    if (!userSnapshot.exists()) {

        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            //set the doc with this object
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo //spreading in extra info at end 
            });

        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;

}

//helper functions 

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUsersWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);
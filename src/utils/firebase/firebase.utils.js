import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signOut,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch
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

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
    console.log('finished');

};

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

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef); //snap shot digs into the place in the db where the auth is coming from and determine if it exists

    //if snapshot doesnt exist create the user in db
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

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

/*
asnyc stream concept - behind the scenes of observer pattern - onAuthStateChangedListener building out listener model
{
    next: callback,
    error: errorCallback,
    complete: completedCallback
}
*/
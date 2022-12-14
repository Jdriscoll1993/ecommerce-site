import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

//LEVERAGING USER CONTEXT PATTERN IN ORDER CENTRALIZE CODE THATS RELATED TO USER AND AUTHENTICATION

//the actual value to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,

});

//provioder is alias component allowing us to use UserContext.Provider and wrap the children
export const UserProvider = ({ children }) => {

    //1) SET UP STORAGE
    const [currentUser, setCurrentUser] = useState(null); //any component listening to currentUser should update
    const value = { currentUser, setCurrentUser };

    //2) SET UP SEPERATE CALL FOR DATA
    useEffect(() => {
        //stop listening when component unmounts
        //onAuthStateChangedListener runs callback whenever auth state changes
        const unsubscrible = onAuthStateChangedListener((user) => {
            if (user) createUserDocumentFromAuth(user);
            setCurrentUser(user);
        });
        return unsubscrible; // pass completedCallback from onAuthStateChangedListener to call it on clean up 
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
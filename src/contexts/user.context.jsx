import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';
//as the actual value you want ot access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

//provioder is alias component allowing us to use UserContext.Provider and wrap the children
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null); //any component listening to currentUser should update
    const value = { currentUser, setCurrentUser };

    //no longer need to hook into UserContext from sign-in and sign-up forms
    //now whenver context value updates, dont need to rerun form functions needlessly
    useEffect(() => {
        //stop listening when component unmounts
        //onAuthStateChangedListener runs callback whenever auth state changes
        const unsubscrible = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);

        });

        return unsubscrible;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
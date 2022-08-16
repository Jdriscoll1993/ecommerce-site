import { createContext, useState } from 'react';

//as the actual value you want ot access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

//provioder is alias component allowing us to use UserContext.Provider and wrap the children
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null); //any component listening to currentUser should update
    const value = { currentUser, setCurrentUser };


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
import { createContext, useState, useEffect } from 'react';
import { addCollectionAndDocument, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';


import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
    getCategoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {

    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    const value = { categoriesMap };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}













// ***RUNNING AGAIN WILL ATTEMPT TO SET VALUES IN DB*** Ran once to set values in db.
// useEffect(() => {
//     addCollectionAndDocument('categories', SHOP_DATA);
// }, []);
//
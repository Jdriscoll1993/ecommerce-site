import { createContext, useState, useEffect } from 'react';
import { addCollectionAndDocument, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';


import SHOP_DATA from '../shop-data.js'

export const ProductsContext = createContext({
    products: [],
})

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const value = { products };

    // ***RUNNING AGAIN WILL ATTEMPT TO SET VALUES IN DB*** Ran once to set values in db. 
    // useEffect(() => {
    //     addCollectionAndDocument('categories', SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }
        getCategoriesMap();
    }, []);


    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

import { createContext, useState, useEffect } from 'react';
import { addCollectionAndDocument } from '../utils/firebase/firebase.utils.js';


import SHOP_DATA from '../shop-data.js'

export const ProductsContext = createContext({
    products: [],
})

export const ProductsProvider = ({ children }) => {
    //1) store data
    const [products, setProducts] = useState([]);
    const value = { products };

    //2)set up call for data
    useEffect(() => {
        addCollectionAndDocument('categories', SHOP_DATA);
    }, []);


    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

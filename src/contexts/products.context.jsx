import { createContext, useState, useEffect } from 'react';
import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext({
    products: [],
})

export const ProductsProvider = ({ children }) => {
    //1) store data
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };

    //2)set up call for data
    useEffect(() => {
    }, []);


    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

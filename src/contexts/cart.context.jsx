import { useState, createContext, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    //figure out if item already exists in cart
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === productToAdd.id
    });

    //yes? add quantity +1 to existing item
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    //no? return cart items array of product object with quantity of 1
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}


// CONTEXT
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartItemCount: 0
});

//PROVIDER 
export const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0)

    useEffect(() => {
        const itemCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartItemCount(itemCount);
    }, [cartItems]);



    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }



    //pass vals to context provider
    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartItemCount };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}








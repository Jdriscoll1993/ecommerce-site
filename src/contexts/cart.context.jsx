import { useState, createContext } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === productToAdd.id
    });

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
    // find if item exists in cart
    // if it does, add quanity +1
    // if not add the new item
    // return the new array of cartitems with respective quantities 
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { }

});

export const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}







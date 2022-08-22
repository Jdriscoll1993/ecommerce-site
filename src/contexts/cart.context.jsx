import { useState, createContext, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    //find if item already exists in cart
    const existingCartItem = cartItems.find((cartItem) =>
        cartItem.id === productToAdd.id
    );

    //if it does, add 1 to the quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    };

    //if not, add the item to the cart
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {

    //find item in cart to remove
    const itemToRemove = cartItems.find((cartItem) =>
        cartItem.id === productToRemove.id);

    //if quantity is 1, remove item from cart
    if (itemToRemove.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }

    //otherwise decrement by 1
    return cartItems.map((cartItem) => cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}

const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
}


// CONTEXT
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    cartItemCount: 0,
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartTotal: 0
});

//PROVIDER 
export const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartTotal, setCartTota] = useState(0);

    useEffect(() => {
        const itemCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartItemCount(itemCount);
    }, [cartItems]);

    useEffect(() => {
        const itemTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTota(itemTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear));
    }

    //pass vals to context provider
    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartItemCount, removeItemFromCart, clearItemFromCart, cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}








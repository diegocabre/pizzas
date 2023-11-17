import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (pizza) => {
        setCartItems([...cartItems, pizza]);
    };

    const removeFromCart = (pizzaId) => {
        const updatedCart = cartItems.filter((item) => itemId !== pizzaId);
        setCartItems(updatedCart);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <MyContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                calculateTotal
            }}
        >
            {children}
        </MyContext.Provider>
    )

}
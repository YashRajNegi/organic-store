"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

// Add an item to the cart
const addToCart = (item) => {
setCart((prevCart) => {
// Check if the item already exists in the cart using its unique ID
const existingItem = prevCart.find((i) => i.id === item.id);
if (existingItem) {
// If it exists, increase the quantity
return prevCart.map((i) =>
i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
);
}
// If it doesn't exist, add it to the cart with a quantity of 1
return [...prevCart, { ...item, quantity: 1 }];
});
};

// Update the quantity of an item
const updateQuantity = (id, newQuantity) => {
if (newQuantity < 1) return;
setCart((prevCart) =>
prevCart.map((item) =>
item.id === id ? { ...item, quantity: newQuantity } : item
)
);
};

// Remove an item from the cart
const removeItem = (id) => {
setCart((prevCart) => prevCart.filter((item) => item.id !== id));
};

return (
<CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem }}>
{children}
</CartContext.Provider>
);
};

export const useCart = () => useContext(CartContext);

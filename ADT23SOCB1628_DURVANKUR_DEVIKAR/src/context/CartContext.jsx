import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("travel_cart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("travel_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx].qty = (copy[idx].qty || 1) + (item.qty || 1);
        return copy;
      }
      return [...prev, { ...item, qty: item.qty || 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((it) => it.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty } : it)));
  };

  const clearCart = () => setCartItems([]);

  const itemCount = cartItems.reduce((s, it) => s + (it.qty || 0), 0);
  const totalAmount = cartItems.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0);

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, updateQuantity, clearCart, itemCount, totalAmount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

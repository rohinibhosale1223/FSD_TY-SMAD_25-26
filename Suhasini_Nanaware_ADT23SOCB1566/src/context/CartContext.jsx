import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("restro_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("restro_cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(i => i.id !== id));
  }

  function updateQty(id, qty) {
    setCart(prev => prev.map(i => (i.id === id ? { ...i, qty } : i)));
  }

  function clearCart() {
    setCart([]);
  }

  const value = { cart, addToCart, removeFromCart, updateQty, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

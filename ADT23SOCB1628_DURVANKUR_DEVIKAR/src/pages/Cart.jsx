import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, totalAmount, removeFromCart, updateQuantity, clearCart } = useCart();
  const nav = useNavigate();

  return (
    <div className="container py-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
              <div>
                <h5>{item.name}</h5>
                <p>${item.price}</p>
              </div>
              <div>
                <button onClick={() => updateQuantity(item.id, item.qty - 1)}>-</button>
                <span className="mx-2">{item.qty}</span>
                <button onClick={() => updateQuantity(item.id, item.qty + 1)}>+</button>
                <button className="btn btn-danger ms-3" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h4 className="mt-3">Total: ${totalAmount}</h4>
          <button className="btn btn-primary me-2" onClick={() => nav("/booking")}>Proceed to Booking</button>
          <button className="btn btn-secondary" onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

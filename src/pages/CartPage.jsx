import React from "react";
import "./CartPage.css";

export const CartPage = ({ events, cart, onRemove, onPlaceOrder }) => {
  const items = events.filter((e) => cart.includes(e.id));
  const total = items.reduce((sum, e) => sum + e.price, 0);

  return (
    <div className="cart-container">
      <h2 className="title">🛍️ Your Cart</h2>

      {items.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {items.map((e) => (
            <div className="cart-item" key={e.id}>
              <img src={e.imageUrl} alt={e.name} />
              <div>
                <h3>{e.name}</h3>
                <p>{e.date}</p>
                <p>₹{e.price}</p>
                <button onClick={() => onRemove(e.id)}>Remove</button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <button onClick={onPlaceOrder}>✅ Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

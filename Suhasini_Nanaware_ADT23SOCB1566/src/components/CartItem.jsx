import React from "react";
import "./CartItem.css";

export default function CartItem({ item, removeFromCart, updateQty }) {
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.name} className="cart-item-img" />

      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p className="text-muted">₹{item.price.toFixed(2)}</p>

        <div className="qty-control">
          <label>Qty:</label>
          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) => updateQty(item.id, Math.max(1, +e.target.value))}
          />
        </div>
      </div>

      <div className="cart-item-actions">
        <strong className="total-price">
          ₹{(item.price * item.qty).toFixed(2)}
        </strong>
        <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
          ✖
        </button>
      </div>
    </div>
  );
}

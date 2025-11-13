import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "./Cart.css";

export default function Cart() {
  const { cart, removeFromCart, updateQty, clearCart } = useCart();

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = cart.length > 0 ? 2.5 : 0;
  const total = subtotal + delivery;

  const handleCheckout = () => {
    alert(
      "🛍️ Checkout successful! (Simulated)\nThank you for dining with Gourmet Delight!"
    );
    clearCart();
  };

  return (
    <div className="cart-page">
      <div className="cart-hero">
        <div className="overlay">
          <h1 className="hero-title">Your <span>Cart</span></h1>
          <p className="hero-subtitle">Review your delicious picks before checkout 🍽️</p>
        </div>
      </div>

      <div className="cart-container">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              className="empty-img"
            />
            <p>
              Your cart is empty! Visit the{" "}
              <a href="/menu" className="link-menu">Menu</a> to add dishes 🍛
            </p>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.img} alt={item.name} className="cart-item-img" />

                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">₹{item.price.toFixed(2)}</p>

                    <div className="qty-row">
                      <label>Qty:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) =>
                          updateQty(item.id, Math.max(1, +e.target.value))
                        }
                      />
                    </div>
                  </div>

                  <div className="cart-item-actions">
                    <strong className="item-total">
                      ₹{(item.price * item.qty).toFixed(2)}
                    </strong>
                    <button
                      className="btn-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✖ Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-line">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-line">
                <span>Delivery</span>
                <span>₹{delivery.toFixed(2)}</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <strong>₹{total.toFixed(2)}</strong>
              </div>

              <div className="cart-buttons">
                <a href="/checkout" className="btn-checkout">
                  ✅ Proceed to Checkout
                </a>
                <button className="btn-clear" onClick={clearCart}>
                  🗑️ Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

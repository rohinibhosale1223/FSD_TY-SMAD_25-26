import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, subtotal, total, DELIVERY_FEE, showToast, clearCart } = useCart();

  function handleCheckout() {
    showToast("Your order has been placed!", "success");
    clearCart();
  }

  if (cart.length === 0) {
    return (
      <section className="py-5 text-center bg-light">
        <div className="container">
          <i className="fas fa-shopping-bag fa-4x text-warning mb-3"></i>
          <h3>Your cart is empty</h3>
          <p className="text-muted">Add items from the collection page.</p>
          <a href="/menu" className="btn btn-warning mt-2">
            Browse Collection
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-section py-5 bg-white">
      <div className="container">
        <h2 className="fw-bold text-dark mb-4 text-center">Your Cart</h2>
        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-warning">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.imgUrl}
                      alt={item.name}
                      width="70"
                      height="70"
                      className="rounded me-2"
                    />
                    {item.name}
                  </td>
                  <td>₹{item.price.toLocaleString("en-IN")}</td>
                  <td>
                    <div className="btn-group">
                      <button
                        className="btn btn-sm btn-outline-warning"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        −
                      </button>
                      <span className="btn btn-sm btn-light disabled">
                        {item.quantity}
                      </span>
                      <button
                        className="btn btn-sm btn-outline-warning"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card p-4 shadow-sm mt-4">
          <div className="d-flex justify-content-between">
            <span>Subtotal:</span>
            <strong>₹{subtotal().toLocaleString("en-IN")}</strong>
          </div>
          <div className="d-flex justify-content-between">
            <span>Delivery Fee:</span>
            <strong>₹{DELIVERY_FEE.toLocaleString("en-IN")}</strong>
          </div>
          <hr />
          <div className="d-flex justify-content-between h5">
            <span>Total:</span>
            <strong>₹{total().toLocaleString("en-IN")}</strong>
          </div>
          <button className="btn btn-warning mt-3 w-100" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import "./CheckoutForm.css"; 

export default function CheckoutForm() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "card",
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert("✅ Order placed successfully!\nThank you for ordering with Gourmet Delight!");
    setForm({ name: "", address: "", phone: "", payment: "card" });
  }

  return (
    <div className="checkout-page">
      <h2 className="checkout-title">Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Enter your full name"
        />

        <label>Delivery Address</label>
        <textarea
          required
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          placeholder="Enter complete delivery address"
        />

        <label>Phone</label>
        <input
          required
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="Enter phone number"
        />

        <label>Payment Method</label>
        <select
          value={form.payment}
          onChange={(e) => setForm({ ...form, payment: e.target.value })}
        >
          <option value="card">Credit / Debit Card</option>
          <option value="upi">UPI</option>
          <option value="cod">Cash on Delivery</option>
        </select>

        <button type="submit" className="btn-checkout">Place Order</button>
      </form>
    </div>
  );
}

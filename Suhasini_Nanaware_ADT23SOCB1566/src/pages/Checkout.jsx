import React, { useState, useRef, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import CheckoutForm from "../components/CheckoutForm";

export default function Checkout() {
  const [details, setDetails] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "cod",
  });
  const [done, setDone] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const receiptRef = useRef();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const updatedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(updatedItems);

    setDone(true);
  }

  const handleDownload = async () => {
    const element = receiptRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
    pdf.save("Order_Receipt.pdf");
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h2>Checkout 🛍️</h2>
        <p className="subtitle">Fill in your details to complete the order.</p>

        {done ? (
          <div className="success-box" ref={receiptRef}>
            <div className="receipt-modern">
              <h2 className="receipt-title">🍴 Gourmet Delight</h2>
              <p className="receipt-tagline">Fine Taste, Delivered Fresh ✨</p>

              <div className="receipt-section">
                <h3>👤 Customer Info</h3>
                <p><strong>Name:</strong> {details.name}</p>
                <p><strong>Address:</strong> {details.address}</p>
                <p><strong>Phone:</strong> {details.phone}</p>
                <p>
                  <strong>Payment:</strong>{" "}
                  {details.payment === "cod"
                    ? "Cash on Delivery"
                    : details.payment.toUpperCase()}
                </p>
              </div>

              <div className="receipt-section">
                <h3>🧾 Ordered Dishes</h3>
                {cartItems.length > 0 ? (
                  <ul className="receipt-list">
                    {cartItems.map((item, index) => (
                      <li key={index}>
                        <span>{item.name}</span>
                        <span>₹{item.price}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="empty-note">No dishes found in your order.</p>
                )}
              </div>

              <div className="receipt-total">
                <h3>Total: ₹{total}</h3>
              </div>

              <p className="thank-you">💖 Thank you for ordering with Gourmet Delight!</p>
            </div>

            <button onClick={handleDownload} className="download-btn">
              📄 Download Receipt
            </button>
          </div>
        ) : (
          <>
            <CheckoutForm />
            <form className="checkout-form" onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                value={details.name}
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
              />

              <label>Address</label>
              <textarea
                placeholder="Enter delivery address"
                required
                value={details.address}
                onChange={(e) =>
                  setDetails({ ...details, address: e.target.value })
                }
              ></textarea>

              <label>Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
                value={details.phone}
                onChange={(e) =>
                  setDetails({ ...details, phone: e.target.value })
                }
              />

              <label>Payment Method</label>
              <select
                value={details.payment}
                onChange={(e) =>
                  setDetails({ ...details, payment: e.target.value })
                }
              >
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI / Wallet</option>
              </select>

              <button type="submit">Confirm Order ✅</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

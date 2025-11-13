import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("gymCart");
    if (saved) {
      const parsed = JSON.parse(saved);
      setCart(parsed);
      const t = parsed.reduce((sum, i) => sum + i.price * i.quantity, 0);
      setTotal(t);
    }
  }, []);

  // Handle place order
  const handleOrder = (e) => {
    e.preventDefault();
    const newOrderId = "FT" + Math.floor(Math.random() * 100000);
    setOrderId(newOrderId);
    localStorage.removeItem("gymCart");
    setOrderPlaced(true);

    // Auto redirect after 3 seconds
    setTimeout(() => {
      navigate("/products");
    }, 3000);
  };

  // If order placed, show success message
  if (orderPlaced) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h2 className="text-warning fw-bold mb-3">🎉 Order Placed Successfully!</h2>
        <p className="text-muted fs-5">
          Thank you for shopping with <span className="fw-bold text-warning">FitTrack+</span>.<br />
          Your order ID is <span className="fw-bold">{orderId}</span>.
        </p>
        <p className="text-muted">
          You’ll receive a confirmation email shortly. Redirecting to products...
        </p>
        <a href="/products" className="btn btn-warning fw-bold mt-3">
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-5">
      
      {/* Hero Section */}
      <section className="text-center py-4 mb-4 bg-dark text-light rounded shadow">
        <h2 className="fw-bold text-warning">Checkout</h2>
        <p className="text-light">Complete your order and start recovering stronger!</p>
      </section>

      <div className="row">
        {/* Billing Form */}
        <div className="col-lg-8 mb-4">
          <div className="card shadow border-0 p-4">
            <h4 className="fw-bold text-warning mb-3">Billing Details</h4>
            <form onSubmit={handleOrder}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Full Name</label>
                  <input type="text" className="form-control" placeholder="Asad Nadaf" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Email</label>
                  <input type="email" className="form-control" placeholder="asad769@example.com" required />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Phone</label>
                  <input type="tel" className="form-control" placeholder="+91 98765 43210" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">City</label>
                  <input type="text" className="form-control" placeholder="Pune" required />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="123, MG Road, Pune"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Payment Method</label>
                <select className="form-select" required>
                  <option>Cash on Delivery</option>
                  <option>Credit/Debit Card</option>
                  <option>UPI / Google Pay</option>
                </select>
              </div>

              <button type="submit" className="btn btn-warning w-100 fw-bold py-2">
                Place Order
              </button>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card shadow border-0 p-4">
            <h4 className="fw-bold text-warning mb-3">Order Summary</h4>
            {cart.length > 0 ? (
              <>
                <ul className="list-group mb-3">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <strong>{item.name}</strong>
                        <p className="text-muted small mb-0">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <span>₹{item.price * item.quantity}</span>
                    </li>
                  ))}
                </ul>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>₹{total}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping:</span>
                  <span className="text-success">Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total:</span>
                  <span>₹{total}</span>
                </div>
              </>
            ) : (
              <p className="text-muted">Your cart is empty.</p>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="text-center bg-warning text-dark py-5 rounded shadow mt-5">
        <h3 className="fw-bold mb-3">You’re One Step Away!</h3>
        <p className="lead mb-3">
          Complete your purchase and begin your recovery with premium gear from FitTrack+.
        </p>
      </section>
    </div>
  );
}

export default Checkout;

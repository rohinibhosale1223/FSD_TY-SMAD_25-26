import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      alert("⚠️ Please log in to proceed with checkout.");
      navigate("/login");
      return;
    }

    const stateCart = location.state?.cartItems;
    const pendingCheckout = JSON.parse(localStorage.getItem("pendingCheckout"));

    if (stateCart) {
      setCartItems(stateCart);
      setTotal(location.state.total);
    } else if (pendingCheckout) {
      setCartItems(pendingCheckout.cartItems);
      const newTotal = pendingCheckout.cartItems.reduce(
        (sum, item) => sum + item.price * item.orderQty,
        0
      );
      setTotal(newTotal);
      localStorage.removeItem("pendingCheckout");
    }
  }, [location.state, navigate]);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (
      !formData.name ||
      !formData.address ||
      !formData.city ||
      !formData.pincode ||
      !formData.phone
    ) {
      alert("Please fill all shipping details before placing the order.");
      return;
    }

    alert("✅ Order placed successfully! Thank you for shopping with PharmEasy.");
    clearCart();
    navigate("/");
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4 fw-bold text-primary">🧾 Checkout</h2>

      <div className="row">
       =
        <div className="col-md-6 mb-4">
          <h4 className="mb-3">Shipping Details</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Pincode</label>
              <input
                type="text"
                name="pincode"
                className="form-control"
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>

    
        <div className="col-md-6">
          <h4 className="mb-3">Order Summary</h4>
          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <ul className="list-group mb-3">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{item.name}</strong>
                    <p className="text-muted small mb-0">
                      Qty: {item.orderQty}
                    </p>
                  </div>
                  <span>₹{item.price * item.orderQty}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <strong>Total</strong>
                <strong>₹{total}</strong>
              </li>
            </ul>
          )}
          <button
            className="btn btn-success w-100 py-2 fw-bold"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

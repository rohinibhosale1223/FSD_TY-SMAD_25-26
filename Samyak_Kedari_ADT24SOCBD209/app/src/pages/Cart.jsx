import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () =>
    cartItems.reduce(
      (total, item) => total + item.price * (item.orderQty || 1),
      0
    );

  const handleCheckout = () => {
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (!loggedIn) {
      alert("⚠️ Please log in before proceeding to checkout.");
  
      localStorage.setItem("pendingCheckout", JSON.stringify({ cartItems }));
      navigate("/login");
    } else {
      navigate("/checkout", { state: { cartItems, total: calculateTotal() } });
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4 fw-bold text-primary">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-striped align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Product</th>
                  <th>Price (₹)</th>
                  <th>Quantity</th>
                  <th>Total (₹)</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          width="60"
                          height="60"
                          className="me-3 rounded"
                        />
                        <div>
                          <strong>{item.name}</strong>
                          <p className="text-muted small mb-0">{item.desc}</p>
                        </div>
                      </div>
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        max={item.quantity}
                        value={item.orderQty}
                        onChange={(e) =>
                          updateQuantity(item.id, e.target.value)
                        }
                        className="form-control w-50"
                      />
                    </td>
                    <td>₹{item.price * item.orderQty}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="text-end mt-4">
              <h4>Total Amount: ₹{calculateTotal()}</h4>
              <button
                className="btn btn-success mt-3 px-4 fw-bold"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

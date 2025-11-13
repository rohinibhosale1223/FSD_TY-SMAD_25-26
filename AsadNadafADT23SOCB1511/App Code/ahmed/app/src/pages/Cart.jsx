import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("gymCart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const newItem = location.state?.item;
    if (newItem) {
      setCart((prev) => {
        const exists = prev.find((i) => i.id === newItem.id);
        if (exists) {
          return prev.map((i) =>
            i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        } else return [...prev, newItem];
      });
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location.state]);

  useEffect(() => {
    localStorage.setItem("gymCart", JSON.stringify(cart));
  }, [cart]);

  const handleQtyChange = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="container mt-5 pt-5">
      
      {/* Hero Section */}
      <section className="text-center py-4 mb-4 bg-dark text-light rounded shadow">
        <h2 className="fw-bold text-warning">🛒 My Cart</h2>
        <p className="text-light">Review your selected items before checkout</p>
      </section>

      {cart.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted fs-5">Your cart is empty.</p>
          <button
            className="btn btn-warning fw-bold"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div className="row">
          
          {/* Cart Table */}
          <div className="col-lg-8 mb-4">
            <table className="table table-hover align-middle shadow-sm rounded">
              <thead className="table-dark">
                <tr>
                  <th>Product</th>
                  <th>Price (₹)</th>
                  <th>Quantity</th>
                  <th>Total (₹)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((i) => (
                  <tr key={i.id}>
                    <td className="d-flex align-items-center">
                      <img
                        src={i.image}
                        alt={i.name}
                        className="rounded me-3"
                        style={{ width: "60px", height: "60px", objectFit: "cover" }}
                      />
                      <span className="fw-bold">{i.name}</span>
                    </td>
                    <td>{i.price}</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <button
                          className="btn btn-sm btn-outline-warning me-2 fw-bold"
                          onClick={() => handleQtyChange(i.id, -1)}
                        >
                          −
                        </button>
                        <span className="fw-bold">{i.quantity}</span>
                        <button
                          className="btn btn-sm btn-outline-warning ms-2 fw-bold"
                          onClick={() => handleQtyChange(i.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="fw-bold">₹{i.price * i.quantity}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => setCart(cart.filter((x) => x.id !== i.id))}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Section */}
          <div className="col-lg-4">
            <div className="card shadow rounded border-0">
              <div className="card-body">
                <h4 className="fw-bold text-warning mb-3">Order Summary</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>₹{total}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping:</span>
                  <span className="text-success">Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold mb-3">
                  <span>Total:</span>
                  <span>₹{total}</span>
                </div>
                <button 
  className="btn btn-warning w-100 fw-bold" 
  onClick={() => navigate("/checkout")}
>
  Proceed to Checkout
</button>

                <button
                  className="btn btn-outline-dark w-100 mt-3"
                  onClick={() => navigate("/products")}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      {cart.length > 0 && (
        <section className="text-center bg-warning text-dark py-5 rounded shadow mt-5">
          <h3 className="fw-bold mb-3">Train Hard. Recover Smart.</h3>
          <p className="lead mb-3">
            Keep your recovery gear ready — every rep counts!
          </p>
          <button className="btn btn-dark fw-bold px-4">
            Checkout Now
          </button>
        </section>
      )}
    </div>
  );
}

export default Cart;

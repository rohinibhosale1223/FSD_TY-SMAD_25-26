import { useState, useEffect } from "react";

export default function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
    setItems(stored);
  }, []);

  const removeItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const getTotal = () => {
    return items.reduce((sum, item) => {
      const priceNum = Number(item.price.replace("₹", ""));
      return sum + priceNum;
    }, 0);
  };

  const handleCheckout = () => {
    alert("Thank you for purchasing! Your checkout is successful.");
    setItems([]);
    localStorage.removeItem("cartItems");
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="container mt-5 pt-5 text-light">
      <h2 className="text-warning mb-4 fw-bold">Your Cart</h2>

      {items.length === 0 ? (
        <div className="text-center mt-5">
          <h4>Your cart is empty.</h4>
          <p>Add courses from the Courses page to continue learning.</p>
        </div>
      ) : (
        <div className="row">
         
          <div className="col-md-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="card mb-3 bg-dark text-light shadow-sm border-secondary"
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.image}
                      className="img-fluid rounded-start"
                      alt={item.title}
                      style={{ height: "150px", width: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-8 d-flex flex-column justify-content-center p-3">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-warning fw-bold">{item.price}</p>
                    <button
                      className="btn btn-outline-danger btn-sm mt-2"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
          <div className="col-md-4">
            <div className="card bg-dark text-light p-3 shadow">
              <h4 className="text-warning">Checkout</h4>
              <hr />
              <p className="d-flex justify-content-between">
                <strong>Total Courses:</strong> <span>{items.length}</span>
              </p>
              <p className="d-flex justify-content-between">
                <strong>Total Amount:</strong>
                <span className="text-warning fw-bold">₹{getTotal()}</span>
              </p>

              <button
                className="btn btn-warning w-100 fw-semibold mt-3"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

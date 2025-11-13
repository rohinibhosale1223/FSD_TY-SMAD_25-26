import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const handleRemove = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert("Checkout successful! Thank you for enrolling 🙌");
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <div className="page cart-page" style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}> 🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777' }}>No courses added yet.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div 
              key={item.id} 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
                border: '1px solid #ddd',
                padding: '10px',
                borderRadius: '8px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  width="100" 
                  height="60" 
                  style={{ borderRadius: '8px' }} 
                />
                <div>
                  <h4 style={{ margin: 0 }}>{item.title}</h4>
                  <p style={{ margin: '5px 0', color: '#555' }}>₹{item.price}</p>
                </div>
              </div>
              <button 
                onClick={() => handleRemove(item.id)} 
                style={{ background: 'red', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px' }}
              >
                Remove
              </button>
            </div>
          ))}

          <h3 style={{ textAlign: 'right', marginTop: '20px' }}>Total: ₹{total}</h3>
          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <button 
              onClick={handleCheckout} 
              style={{
                background: '#28a745',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

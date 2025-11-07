import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product); 
    navigate("/cart");  
  };

  return (
    <div className="card shadow-sm mb-4 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top"
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        {product.desc && <p className="card-text text-muted small">{product.desc}</p>}
        <p className="fw-bold text-success">₹{product.price}</p>
        <button className="btn btn-primary w-100" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

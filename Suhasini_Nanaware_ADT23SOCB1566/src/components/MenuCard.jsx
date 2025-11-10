import React from "react";
import { useCart } from "../context/CartContext";
import "./MenuCard.css";

export default function MenuCard({ item }) {
  const { addToCart } = useCart();

  return (
    <div className="menu-card shadow-sm">
      <img
        src={item.img}
        alt={item.name}
        className="menu-card-img"
        loading="lazy"
      />

      <div className="menu-card-body">
        <h4 className="menu-card-title">{item.name}</h4>
        <p className="menu-card-cuisine">{item.cuisine}</p>
        <p className="menu-card-desc">{item.desc}</p>

        <div className="menu-card-footer">
          <strong className="menu-card-price">₹{item.price.toFixed(2)}</strong>
          <button
            className="btn-add"
            onClick={() => addToCart(item)}
          >
            Add to Cart 🍽️
          </button>
        </div>
      </div>
    </div>
  );
}

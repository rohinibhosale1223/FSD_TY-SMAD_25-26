
import React from "react";
import "./HomePage.css";

export const HomePage = ({ events, onAddToCart }) => (
  <div className="home-container">
    <h2 className="title">🎉 Upcoming Events</h2>
    <div className="event-grid">
      {events.map((e) => (
        <div key={e.id} className="event-card">
          <img src={e.imageUrl} alt={e.name} />
          <h3>{e.name}</h3>
          <p>{e.date}</p>
          <p>{e.location}</p>
          <p className="price">₹{e.price}</p>
          <button className="add-btn" onClick={() => onAddToCart(e.id)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
);
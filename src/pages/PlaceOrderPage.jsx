import React from "react";
import "./PlaceOrderPage.css";

export const PlaceOrderPage = ({ onBackHome }) => {
  return (
    <div className="order-container">
      <h1>🎉 Order Confirmed!</h1>
      <p>Your booking is successfully placed.</p>
      <button onClick={onBackHome}>Go to Home</button>
    </div>
  );
};

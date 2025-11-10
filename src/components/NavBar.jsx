import React from "react";
import "./NavBar.css";

export const NavBar = ({ isLoggedIn, currentUser, cartCount, navigate, onLogout }) => (
  <nav className="navbar">
    <h1 onClick={() => navigate("home")}>🎟️ EventHub</h1>
    <div className="links">
      {isLoggedIn ? (
        <>
          <span>Hello, {currentUser.name}</span>
          <button onClick={() => navigate("home")}>Home</button>
          <button onClick={() => navigate("cart")}>Cart ({cartCount})</button>
          <button onClick={() => navigate("addEvent")}>Add Event</button>
          <button onClick={() => navigate("about")}>About</button> {/* 👈 NEW */}
          <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={() => navigate("login")}>Login</button>
          <button onClick={() => navigate("register")}>Register</button>
          <button onClick={() => navigate("about")}>About</button> {/* 👈 NEW */}
        </>
      )}
    </div>
  </nav>
);

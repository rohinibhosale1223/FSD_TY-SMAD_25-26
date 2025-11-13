import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅ make sure folder name is 'context' (not 'Context')

export default function Navbar() {
  const navigate = useNavigate();
  const { itemCount } = useCart(); // ✅ cart hook

  const currentUser = (() => {
    try {
      return JSON.parse(sessionStorage.getItem("loggedInUser"));
    } catch (e) {
      return null;
    }
  })();

  function handleLogout() {
    sessionStorage.removeItem("loggedInUser");
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg py-3">
      <div className="container">
        <Link className="navbar-brand fs-3 fw-bold" to="/">
          🌍 TravelWorld
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center fs-6">
            <li className="nav-item">
              <Link className="nav-link px-3" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/booking">Book</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/destinations">Destinations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/about">About</Link>
            </li>

            {/* 🛒 Cart Button */}
            <li className="nav-item ms-2">
              <Link to="/cart" className="btn btn-outline-light btn-sm">
                🛒 {itemCount}
              </Link>
            </li>

            {currentUser ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link d-flex align-items-center px-3"
                    to="/profile"
                    title="Profile"
                  >
                    <i className="fas fa-user me-1" /> {currentUser.name || "Profile"}
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light btn-sm ms-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link d-flex align-items-center px-3"
                    to="/login"
                    title="Login"
                  >
                    <i className="fas fa-sign-in-alt me-1" /> Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link d-flex align-items-center px-3"
                    to="/register"
                    title="Register"
                  >
                    <i className="fas fa-user-plus me-1" /> Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

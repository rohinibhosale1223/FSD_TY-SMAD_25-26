import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // <-- Add this (we'll create file below)

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const items = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartCount(items.length);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);
    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm custom-navbar">
      <div className="container">
        <Link className="navbar-brand fw-bold text-warning fs-4" to="/">
          DSA Learning
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-between ${
            !isCollapsed ? "show" : ""
          }`}
        >
          <ul className="navbar-nav mb-2 mb-lg-0 fs-5">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <Link to="/cart" className="btn btn-outline-light position-relative fs-5">
              <i className="fas fa-shopping-cart me-1"></i> Cart
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/login" className="btn btn-outline-warning fs-5">Login</Link>
            <Link to="/register" className="btn btn-warning text-dark fw-semibold fs-5">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

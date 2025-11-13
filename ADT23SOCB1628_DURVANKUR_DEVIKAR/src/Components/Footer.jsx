import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-5 mt-auto">
      <div className="container">
        <h5 className="fw-bold mb-3">🌍 TravelWorld</h5>
        <p className="mb-4 small text-white-50">
          Your trusted partner for unforgettable travel experiences.
        </p>

        <div className="d-flex justify-content-center gap-4 mb-4">
          <Link to="/about" className="text-white text-decoration-none">
            About
          </Link>
          <Link to="/contact" className="text-white text-decoration-none">
            Contact
          </Link>
          <Link to="/privacy" className="text-white text-decoration-none">
            Privacy
          </Link>
        </div>

        <div className="d-flex justify-content-center gap-4 fs-4 mb-3">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>

        <p className="small text-white-50 mb-0">
          © 2025 TravelWorld. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

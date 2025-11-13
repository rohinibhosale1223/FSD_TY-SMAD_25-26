import React from "react";
import { Link } from "react-router-dom";
import ProductsPage from "./ProductsPage";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center text-md-start bg-light py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center">
          <div className="hero-content col-md-6 px-3">
            <h1 className="display-4 fw-bold text-dark">
              Timeless <span className="text-warning">Elegance</span>
            </h1>
            <p className="lead text-muted">
              Discover exquisite jewellery handcrafted to perfection.
            </p>
            <Link to="/menu" className="btn btn-warning btn-lg mt-3">
              Explore Collection <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>
          <div className="hero-image col-md-6 mt-4 mt-md-0 text-center">
            <img
             src="/images/i1.jpg"
              alt="Jewelry"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-white">
        <div className="container text-center">
          <div className="row g-4">
            <div className="col-md-4">
              <i className="fas fa-award fa-3x text-warning mb-3"></i>
              <h5>Handcrafted Quality</h5>
              <p className="text-muted">
                Meticulously made with passion and precision.
              </p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-gem fa-3x text-warning mb-3"></i>
              <h5>Certified Gems</h5>
              <p className="text-muted">
                Only the finest, ethically sourced gemstones.
              </p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-shipping-fast fa-3x text-warning mb-3"></i>
              <h5>Secure Delivery</h5>
              <p className="text-muted">
                Fast and insured delivery right to your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section py-5 bg-light">
        <div className="container">
          <div className="row g-3">
            {[
  "/images/i2.jpg",
  "/images/i3.jpg",
  "/images/i4.jpg",
  "/images/i5.jpg"
]
.map((src, index) => (
              <div className="col-6 col-md-3" key={index}>
                <img
                  src={src}
                  alt="Jewelry"
                  className="img-fluid rounded shadow-sm"
                  style={{
                    height: "220px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold text-dark mb-4">Our Collections</h2>
          <ProductsPage preview />
          <Link to="/menu" className="btn btn-outline-warning mt-4">
            View More
          </Link>
        </div>
      </section>
    </>
  );
}

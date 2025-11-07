import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); 

  const products = [
    { id: 1, name: "Paracetamol", category: "Medicine", price: 40, quantity: 10, image: "1.jpg" },
    { id: 2, name: "Face Mask", category: "Health Care", price: 25, quantity: 20, image: "1.jpg" },
    { id: 3, name: "Vitamin C", category: "Supplement", price: 120, quantity: 10, image: "1.jpg" },
    { id: 4, name: "Pain Relief Gel", category: "Medicine", price: 99, quantity: 20, image: "1.jpg" },
  ];

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5 pt-5">
   
      <h2 className="text-center mb-4 fw-bold text-primary">Welcome to PharmEasy</h2>

  
      <div className="text-center mb-5">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Search by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h3 className="fw-bold">About Us</h3>
          <p className="text-muted">
            PharmEasy is your trusted partner for healthcare essentials delivered right to your doorstep. 
            We provide quality medicines, health supplements, and medical products with the goal of making 
            healthcare simple, affordable, and accessible for everyone.
          </p>
          <p className="text-muted">
            Our mission is to ensure that every individual has access to reliable healthcare products anytime, anywhere.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="abt.png"
            alt="About PharmEasy"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        </div>
      </div>

  
      <div className="text-center my-5">
        <h3 className="fw-bold text-success mb-4">Why Choose Us?</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="p-3 shadow-sm rounded bg-light">
              <h5>Trusted Quality</h5>
              <p className="text-muted">We source only certified and authentic products for your safety.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 shadow-sm rounded bg-light">
              <h5>Fast Delivery</h5>
              <p className="text-muted">Get your orders delivered swiftly to your doorstep.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 shadow-sm rounded bg-light">
              <h5>Affordable Prices</h5>
              <p className="text-muted">Best prices guaranteed across all products and categories.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="text-center my-5">
        <h3 className="fw-bold text-primary mb-4">Featured Products</h3>
        <div className="row justify-content-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                className="col-md-3 col-sm-6 mb-4"
                key={product.id}
                onClick={() => navigate("/products")}
                style={{ cursor: "pointer" }}
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No products found.</p>
          )}
        </div>
      </div>


      <div className="my-5">
        <h3 className="text-center fw-bold text-success mb-4">What Our Customers Say</h3>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="p-3 shadow-sm rounded bg-light">
              <p>"PharmEasy makes ordering medicines super easy! Excellent service."</p>
              <h6 className="fw-bold">— Aditi Sharma</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 shadow-sm rounded bg-light">
              <p>"Quick delivery and trustworthy products. I highly recommend it."</p>
              <h6 className="fw-bold">— Rohan Mehta</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 shadow-sm rounded bg-light">
              <p>"Affordable pricing and user-friendly interface. Love it!"</p>
              <h6 className="fw-bold">— Sneha Kulkarni</h6>
            </div>
          </div>
        </div>
      </div>

   
      <div className="text-center bg-primary text-white py-5 rounded my-5">
        <h3 className="mb-3">Join PharmEasy Today!</h3>
        <p>Get exclusive discounts, offers, and priority delivery when you sign up now.</p>
        <button className="btn btn-light fw-bold px-4 py-2" onClick={() => navigate("/signup")}>
          Register Now
        </button>
      </div>
    </div>
  );
}

export default Home;

import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1, name: "Paracetamol", desc: "Pain reliever and fever reducer", price: 40, quantity: 10, image: "1.jpg" },
    { id: 2, name: "Vitamin C", desc: "Boosts immunity and energy", price: 120, quantity: 15, image: "1.jpg" },
    { id: 3, name: "Dettol Soap", desc: "Antibacterial skin protection", price: 35, quantity: 20, image: "1.jpg" },
    { id: 4, name: "Pain Relief Spray", desc: "Instant muscle pain relief", price: 90, quantity: 18, image: "1.jpg" },
    { id: 5, name: "Glucose D", desc: "Instant energy drink", price: 50, quantity: 12, image: "1.jpg" },
    { id: 6, name: "Thermometer", desc: "Digital body temperature monitor", price: 250, quantity: 5, image: "1.jpg" },
    { id: 7, name: "Face Mask", desc: "3-layer protection mask", price: 15, quantity: 100, image: "1.jpg" },
    { id: 8, name: "Hand Sanitizer", desc: "Kills 99.9% germs instantly", price: 60, quantity: 30, image: "1.jpg" },
    { id: 9, name: "Cough Syrup", desc: "Relieves dry cough", price: 85, quantity: 25, image: "1.jpg" },
    { id: 10, name: "Blood Pressure Monitor", desc: "Digital BP measurement", price: 899, quantity: 7, image: "1.jpg" },
    { id: 11, name: "Vitamin D Tablets", desc: "Bone health supplement", price: 180, quantity: 10, image: "1.jpg" },
    { id: 12, name: "Oximeter", desc: "Measures oxygen saturation", price: 599, quantity: 8, image: "1.jpg" },
  ];

 
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">Our Products</h2>

 
      <div className="text-center mb-4">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Search by name or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

   
      <div className="row justify-content-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-3 col-sm-6" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;

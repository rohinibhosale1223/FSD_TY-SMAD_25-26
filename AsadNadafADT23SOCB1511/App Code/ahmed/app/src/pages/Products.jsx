import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Protein Powder", price: 2499, image: "/prod1.jpg" },
  { id: 2, name: "Muscle Massage Gun", price: 4999, image: "/prod2.jpg" },
  { id: 3, name: "BCAA Recovery Drink", price: 1599, image: "/prod3.jpg" },
  { id: 4, name: "Knee Support Wraps", price: 999, image: "/prod4.jpg" },
  { id: 5, name: "Foam Roller", price: 799, image: "/prod5.jpg" },
  { id: 6, name: "Creatine Monohydrate", price: 1299, image: "/prod6.jpg" },
  { id: 7, name: "Compression T-Shirt", price: 1499, image: "/prod7.jpg" },
  { id: 8, name: "Whey Isolate Pack", price: 3499, image: "/prod8.jpg" },
];

function Products() {
  const navigate = useNavigate();

  const handleAddToCart = (p) => {
    navigate("/cart", { state: { item: { ...p, quantity: 1 } } });
  };

  return (
    <div className="container mt-5 pt-5">
      
      {/* Hero Section */}
      <section className="text-center py-5 mb-4 bg-dark text-light rounded shadow">
        <h1 className="fw-bold text-warning">Recovery Gear for Champions</h1>
        <p className="lead text-light">
          Boost your performance, reduce soreness, and recover stronger with our premium products.
        </p>
      </section>

      {/* Filter / Search (Optional UI) */}
      <div className="text-center mb-5">
        <input
          type="text"
          className="form-control w-50 mx-auto shadow-sm"
          placeholder="Search for a product..."
          style={{ borderRadius: "50px", padding: "10px 20px" }}
        />
      </div>

      {/* Product Grid */}
      <h2 className="text-center text-warning mb-4 fw-bold">Our Recovery Products</h2>
      <div className="row justify-content-center">
        {products.map((p) => (
          <div key={p.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div
              className="card shadow-sm h-100 border-0"
              style={{
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={p.image}
                className="card-img-top"
                alt={p.name}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{p.name}</h5>
                <p className="text-muted fs-5 mb-3">₹{p.price}</p>
                <button
                  className="btn btn-warning fw-bold px-4"
                  onClick={() => handleAddToCart(p)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="text-center bg-warning text-dark py-5 rounded shadow mt-5">
        <h2 className="fw-bold mb-3">Don’t Let Recovery Slow You Down</h2>
        <p className="lead mb-4">
          Explore our latest recovery tools and supplements to keep your body at its best.
        </p>
        <a href="/cart" className="btn btn-dark fw-bold px-4">
          View Cart
        </a>
      </section>
    </div>
  );
}

export default Products;

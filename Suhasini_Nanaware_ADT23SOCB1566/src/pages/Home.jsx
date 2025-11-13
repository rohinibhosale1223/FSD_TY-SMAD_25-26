import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const dishes = [
    { name: "Korean Bibimbap", price: "₹499", specialty: "Spicy rice bowl with veggies", img: "public/images/bibimbap.jpeg" },
    { name: "Japanese Sushi Platter", price: "₹899", specialty: "Assorted veggie sushi rolls", img: "public/images/sushi.jpeg" },
    { name: "Italian Pasta", price: "₹599", specialty: "Creamy Alfredo with herbs", img: "public/images/italian-pasta.jpeg" },
    { name: "Indian Thali", price: "₹449", specialty: "Complete traditional meal", img: "public/images/indian-thali.jpeg" },
    { name: "Chinese Dumplings", price: "₹399", specialty: "Soft and juicy veggie dumplings", img: "public/images/dumplings.jpeg" },
    { name: "French Crepes", price: "₹349", specialty: "Light & sweet dessert crepes", img: "public/images/crepes.jpeg" },
  ];

  const specials = [
    { name: "Chef’s Signature Ramen", desc: "A comforting bowl with fresh veggies and spicy miso broth", img: "public/images/Chef’s Signature Ramen.jpeg" },
    { name: "Paneer Steak Sizzler", desc: "Grilled paneer served on sizzling veggies & sauce", img: "public/images/Paneer Steak Sizzler.jpeg" },
    { name: "Truffle Mushroom Risotto", desc: "Italian favorite with creamy truffle essence", img: "public/images/Truffle Mushroom Risotto.jpeg" },
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay animate-fade-in">
          <h1 className="animate-slide-up">Discover Global Flavors in One Place</h1>
          <p className="animate-slide-up delay-1">
            ✨ Authentic vegetarian cuisines inspired by Korean, Japanese, Indian, and Chinese kitchens — crafted with care and love. ✨
          </p>
          <button
            className="btn-explore animate-slide-up delay-2"
            onClick={() => navigate("/menu")}
          >
            Explore Menu
          </button>
        </div>
      </section>

      <section className="menu-preview container my-5 text-center">
        <h2 className="fw-bold section-title text-brown mb-4">🍽️ Explore Our Menu</h2>
        <div className="row g-4">
          {dishes.map((dish, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="card menu-card shadow-sm border-0">
                <img src={dish.img} alt={dish.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="fw-bold text-brown">{dish.name}</h5>
                  <p className="text-muted small">{dish.specialty}</p>
                  <p className="fw-semibold text-accent">{dish.price}</p>
                  <button
                    className="btn btn-outline-accent mt-2"
                    onClick={() => alert(`🍴 ${dish.name}\n${dish.specialty}\nPrice: ${dish.price}`)}
                  >
                    View Dish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="specials-section container my-5 text-center">
        <h2 className="fw-bold text-brown mb-4">👨‍🍳 Today’s Specials & Chef’s Favorites</h2>
        <p className="text-muted mb-4">
          Handpicked creations by our chef to bring you a unique dining experience every day.
        </p>
        <div className="row g-4">
          {specials.map((item, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="card shadow-sm border-0 special-card">
                <img src={item.img} alt={item.name} className="card-img-top rounded-top" />
                <div className="card-body">
                  <h5 className="fw-bold text-brown">{item.name}</h5>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-preview container d-flex flex-column flex-md-row align-items-center justify-content-between my-5 py-4">
        <div className="about-img">
          <img
            src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=900&q=80"
            alt="Restaurant Interior"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="about-text mt-4 mt-md-0 text-center text-md-start">
          <h2 className="fw-bold text-brown">About Gourmet Delight</h2>
          <p className="text-muted mt-2">
            We bring together authentic flavors from around the world in one
            comforting vegetarian menu. Every dish is made fresh with love and
            care.
          </p>
         <button
            className="btn btn-accent mt-2"
            onClick={() => navigate("/about")}
          >
            Read More
          </button>       
           </div>
      </section>

      <section className="testimonials py-5 text-center">
        <div className="container">
          <h2 className="fw-bold text-brown mb-4">💬 What Our Customers Say</h2>
          <div className="row g-4">
            {[
              { name: "Aarav Sharma", text: "Perfect mix of authentic flavors and cozy vibes!", img: "https://randomuser.me/api/portraits/men/32.jpg" },
              { name: "Sana Kapoor", text: "Everything tasted like home but with a gourmet twist!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
              { name: "Rohan Mehta", text: "Highly recommended for vegetarians who love global cuisine!", img: "https://randomuser.me/api/portraits/men/76.jpg" },
            ].map((review, index) => (
              <div className="col-md-4" key={index}>
                <div className="card testimonial-card p-4 border-0 shadow-sm">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <p className="fst-italic text-muted">"{review.text}"</p>
                  <h6 className="fw-bold text-accent mt-2">{review.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter text-center py-5">
        <div className="container">
          <h2 className="fw-bold text-brown mb-3">
            Join Our Foodie Family 🍰
          </h2>
          <p className="text-muted mb-4">
            Subscribe for exclusive offers and the latest menu updates!
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control w-auto px-3 rounded-pill"
            />
            <button className="btn btn-accent rounded-pill">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}

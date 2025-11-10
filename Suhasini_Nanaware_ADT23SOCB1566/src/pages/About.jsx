import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

export default function About() {
  return (
    <div className="about-page py-5">
      <div className="container text-center mb-5">
        <h2 className="fw-bold display-5 text-brown">
          About <span className="text-accent">Gourmet Delight</span>
        </h2>
        <p className="text-muted fs-5 mt-3">
          A cozy destination where vegetarian global flavors meet authentic taste and artful presentation.
        </p>
      </div>

      <div className="container my-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <img
              src="public\images\Restaurant-interior.jpeg"
              alt="Restaurant interior"
              className="img-fluid rounded shadow-lg about-img"
            />
          </div>
          <div className="col-md-6 text-md-start text-center">
            <h3 className="fw-bold text-accent mb-3">Our Story</h3>
            <p className="text-secondary fs-5">
              Gourmet Delight started with a passion to bring the <b>authentic flavors</b> of Asia and beyond 
              to every vegetarian plate. Inspired by Korean, Japanese, Indian, and Italian cuisines, 
              our chefs recreate traditional recipes with a comforting modern twist. 
              Every meal is made with love, precision, and the finest ingredients.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5 mission-section">
        <div className="row align-items-center g-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80"
              alt="Chef preparing meal"
              className="img-fluid rounded shadow-lg about-img"
            />
          </div>
          <div className="col-md-6 text-md-start text-center">
            <h3 className="fw-bold text-accent mb-3">Our Mission</h3>
            <p className="text-secondary fs-5">
              Our mission is simple — to craft delicious vegetarian dishes that feel like 
              <b> a warm hug on a plate.</b> We believe great food connects people, 
              celebrates culture, and nourishes both body and soul.  
              Every dish is thoughtfully curated to reflect our values of 
              <b> authenticity, quality, and care.</b>
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center my-5">
        <h3 className="fw-bold text-brown mb-4">👨‍🍳 Meet Our Culinary Experts</h3>
        <div className="row g-4">
          {[
            {
              name: "Chef Arjun Mehta",
              role: "Head Chef – Indian Cuisine",
              img: "public/images/Chef-ArjunMehta.jpeg",
            },
            {
              name: "Chef Isabella Rossi",
              role: "Italian Cuisine Specialist",
              img: "public/images/Chef-IsabellaRossi.jpeg",
            },
            {
              name: "Chef Kenji Tanaka",
              role: "Japanese Cuisine Expert",
              img: "public/images/Chef-KenjiTanaka.jpeg",
            },
          ].map((chef, index) => (
            <div className="col-md-4" key={index}>
              <div className="card team-card border-0 shadow-sm p-4">
                <img
                  src={chef.img}
                  alt={chef.name}
                  className="rounded-circle mx-auto mb-3 shadow"
                  width="120"
                  height="120"
                />
                <h5 className="fw-bold text-brown">{chef.name}</h5>
                <p className="text-muted">{chef.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center py-5 closing-note">
        <h4 className="fw-bold text-brown">Every Dish Tells a Story</h4>
        <p className="text-muted mt-2 mb-3">
          From our kitchen to your heart — bringing flavors that comfort, inspire, and delight.
        </p>
        <button className="btn btn-accent rounded-pill">Visit Our Menu 🌸</button>
      </div>
    </div>
  );
}

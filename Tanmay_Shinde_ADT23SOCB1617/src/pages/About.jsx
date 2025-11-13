import React from "react";

export default function About() {
  return (
    <section className="about-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <img
              src="/images/i7.jpg"
              alt="Jewelry crafting"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold text-dark">About Voro</h2>
            <p className="text-muted mt-3">
              Voro was born from a passion for fine artistry and the timeless
              beauty of jewellery. Each piece we create is a blend of luxury,
              craftsmanship, and love — made for those who appreciate elegance
              that lasts forever.
            </p>
            <p className="text-muted">
              Our artisans have perfected the art of blending modern design with
              traditional finesse. Whether it’s a diamond ring, a delicate
              pendant, or a stunning necklace, Voro promises sophistication and
              sparkle for every occasion.
            </p>
            <h5 className="text-warning mt-4">Crafted with Passion ✨</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

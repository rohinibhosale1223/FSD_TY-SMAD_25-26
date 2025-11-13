import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80",
      title: "Discover Your Next Adventure",
      subtitle: "Explore the world's most enchanting destinations with TravelWorld.",
      cta: { to: "/booking", label: "Book Your Trip Now" },
    },
    {
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1950&q=80",
      title: "Alpine Adventures Await",
      subtitle: "Experience charming villages nestled in majestic mountains.",
      cta: { to: "/destinations", label: "Explore Destinations" },
    },
    {
      img: "https://i.natgeofe.com/k/e924c4a8-cf47-4621-9ef8-20884ad2444f/Pyramids-at-Giza.png",
      title: "Ancient Wonders",
      subtitle: "Explore rich cultural heritage and stunning architecture.",
      cta: { to: "/destinations", label: "Discover History" },
    },
    {
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1950&q=80",
      title: "Nature's Serenity",
      subtitle: "Find peace in pristine forests and cascading waterfalls.",
      cta: { to: "/destinations", label: "Plan Your Escape" },
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgyFtkbjmq1-7rFVLHNLFsUU1XbTO_w5xRw&s",
      title: "Urban Adventures",
      subtitle: "Experience vibrant cities that never sleep.",
      cta: { to: "/destinations", label: "City Breaks" },
    },
    {
      img: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1950&q=80",
      title: "Desert Adventures",
      subtitle: "Journey through endless golden landscapes.",
      cta: { to: "/destinations", label: "Desert Tours" },
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi811G117v9Bo34G1xwSK1rEFVQSwkNzsd6w&s",
      title: "Sunset Paradise",
      subtitle: "Watch the sun set over crystal-clear waters.",
      cta: { to: "/destinations", label: "Beach Getaways" },
    },
  ];

  const heroStyle = {
    position: "relative",
    width: "100%",
    height: "90vh",
    overflow: "hidden",
  };

  const imgStyle = {
    width: "100%",
    height: "90vh",
    objectFit: "cover",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.3)",
  };

  const contentStyle = {
    position: "absolute",
    bottom: "20%",
    left: "10%",
    color: "#fff",
    textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
  };

  return (
    <>
      <section className="hero-carousel" data-aos="fade-in" data-aos-duration="1200" style={heroStyle}>
        <div
          id="heroCarousel"
          className="carousel slide h-100"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div className="carousel-indicators">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to={idx}
                className={idx === 0 ? "active" : ""}
                aria-current={idx === 0 ? "true" : undefined}
                aria-label={`Slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner h-100">
            {slides.map((s, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                <img src={s.img} alt={s.title} style={imgStyle} />
                <div style={overlayStyle} />
                <div style={contentStyle}>
                  <h1 className="fw-bold">{s.title}</h1>
                  <p className="fs-5">{s.subtitle}</p>
                  <Link to={s.cta.to} className="btn btn-primary btn-lg">
                    {s.cta.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
            aria-label="Previous"
          >
            <span className="carousel-control-prev-icon" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
            aria-label="Next"
          >
            <span className="carousel-control-next-icon" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <main className="container flex-grow-1 py-5">
        <div className="mb-5 search-bar" data-aos="fade-up" data-aos-duration="1000">
          <div className="input-group input-group-lg rounded-pill shadow-sm">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Search destinations, activities..."
              aria-label="Search destinations"
            />
            <button className="btn btn-primary rounded-pill ms-2" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-12 col-sm-6 col-lg-4" data-aos="zoom-in" data-aos-duration="800">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-map-marked-alt fa-2x text-primary" />
                </div>
                <h5 className="card-title">Popular Destinations</h5>
                <p className="card-text text-muted">
                  Explore our most booked places across the world!
                </p>
                <Link
                  to="/destinations"
                  className="stretched-link text-decoration-none fw-semibold text-primary"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-sm-6 col-lg-4"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-calendar-alt fa-2x text-primary" />
                </div>
                <h5 className="card-title">Book Your Trip</h5>
                <p className="card-text text-muted">
                  Ready for a new adventure? Start booking now!
                </p>
                <Link
                  to="/booking"
                  className="stretched-link text-decoration-none fw-semibold text-primary"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-sm-6 col-lg-4"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-user-plus fa-2x text-primary" />
                </div>
                <h5 className="card-title">Register</h5>
                <p className="card-text text-muted">
                  Create a new account to start your journey with us.
                </p>
                <Link
                  to="/register"
                  className="stretched-link text-decoration-none fw-semibold text-primary"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="social-proof mt-5" data-aos="fade-up" data-aos-duration="1000">
          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="4000"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner text-center">
              <div className="carousel-item active">
                <h4 className="mb-3">What Our Travelers Say</h4>
                <p className="testimonial">
                  "TravelWorld made our vacation unforgettable! The booking process was easy and
                  the destinations were amazing."
                </p>
                <p className="testimonial mb-0">- Prathmesh W.</p>
              </div>
              <div className="carousel-item">
                <h4 className="mb-3">What Our Travelers Say</h4>
                <p className="testimonial">
                  "Amazing customer service and attention to detail. We felt safe and well taken
                  care of every step of the way."
                </p>
                <p className="testimonial mb-0">- Raj P.</p>
              </div>
              <div className="carousel-item">
                <h4 className="mb-3">What Our Travelers Say</h4>
                <p className="testimonial">
                  "Great deals and beautiful curated itineraries — 10/10 would book again!"
                </p>
                <p className="testimonial mb-0">- Chetan T.</p>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
              aria-label="Previous testimonial"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
              aria-label="Next testimonial"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

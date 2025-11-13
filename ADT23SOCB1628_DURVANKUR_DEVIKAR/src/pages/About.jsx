import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-light d-flex flex-column min-vh-100">
      <main className="container-fluid py-5 flex-grow-1">
        <section className="container mb-5" data-aos="fade-down">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-4 fw-bold text-primary mb-4">About TravelWorld</h2>
              <p className="lead text-muted">
                We're on a mission to make travel easy, affordable, and inspiring. 
                Whether you're looking for a relaxing beach holiday or an adventurous trek, 
                TravelWorld brings you curated experiences and unmatched convenience.
              </p>
            </div>
          </div>
        </section>

        <section className="container mb-5" data-aos="fade-up">
          <div className="row text-center mb-5">
            <h3 className="h1 fw-semibold text-primary">What We Offer</h3>
          </div>

          <div className="row g-4">
            {[              { icon: "plane-departure", title: "Flight Booking", text: "Seamless flight booking for all destinations with best global deals." },
              { icon: "hotel", title: "Hotel Reservations", text: "Partnered with top hotels for affordable stays and luxury suites." },
              { icon: "map-marked-alt", title: "Guided Tours", text: "Book guided tours and activities for memorable journeys." },
            ].map((item, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-4">
                      <i className={`fas fa-${item.icon} display-3 text-primary`}></i>
                    </div>
                    <h4 className="fw-bold mb-3">{item.title}</h4>
                    <p className="text-muted">{item.text}</p>
                    <button className="btn btn-outline-primary mt-3">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-5 shadow-sm" data-aos="fade-up">
          <div
  className="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-4"
  style={{ rowGap: "2rem" }}
>
  {["expedia.png", "booking-bg.png", "travel-banner.jpg", "beache.jpg"].map(
    (img, i) => (
      <div
        key={i}
        style={{
          width: "120px",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          overflow: "hidden",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={`/Images/${img}`}
          alt={`partner-${i}`}
          className="img-fluid"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    )
  )}
</div>

        </section>

        <section className="container my-5" data-aos="fade-up">
          <div className="text-center mb-5">
            <h3 className="h1 fw-semibold text-primary">Why Choose TravelWorld?</h3>
          </div>
          <div className="row g-4">
            {[              { icon: "star", title: "Expert Guidance", desc: "Personalized itineraries by travel experts with 24/7 support." },
              { icon: "headset", title: "24/7 Customer Support", desc: "Round-the-clock assistance before, during, and after trips." },
              { icon: "shield-alt", title: "Secure Booking", desc: "Encrypted transactions and advanced data protection." },
              { icon: "globe", title: "Global Reach", desc: "Access to 500+ destinations worldwide with trusted partners." },
            ].map((item, i) => (
              <div className="col-lg-6" key={i}>
                <div className="d-flex align-items-start p-3">
                  <div className="bg-primary rounded-circle p-3 me-4">
                    <i className={`fas fa-${item.icon} text-white fa-lg`}></i>
                  </div>
                  <div>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container text-center mb-5" data-aos="fade-up">
          <div className="bg-primary text-white p-5 rounded-3">
            <h3 className="fw-bold mb-3">Ready to Start Your Journey?</h3>
            <p className="lead mb-4">Join thousands of satisfied travelers who trust TravelWorld.</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <button className="btn btn-light btn-lg px-4">
                <i className="fas fa-search me-2"></i>Explore Destinations
              </button>
              <button className="btn btn-outline-light btn-lg px-4">
                <i className="fas fa-phone me-2"></i>Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

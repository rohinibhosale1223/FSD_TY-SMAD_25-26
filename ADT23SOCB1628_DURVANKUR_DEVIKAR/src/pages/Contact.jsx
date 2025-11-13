import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.classList.add("was-validated");
    if (!e.target.checkValidity()) return;
    alert("Thanks — your message was sent (demo). We’ll get back to you soon.");
    e.target.reset();
    e.target.classList.remove("was-validated");
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <main className="container py-5 flex-grow-1">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h1
              className="h3 fw-bold text-primary mb-2 display-contact"
              data-aos="fade-down"
            >
              Get in Touch
            </h1>
            <p className="text-muted mb-0">
              Have questions or need help planning your next trip? Send us a
              message — we’re here to help.
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="bg-white p-4 rounded shadow-sm">
              <form
                className="needs-validation"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="OM Dev"
                    required
                  />
                  <div className="invalid-feedback">Please enter your name.</div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="xyz@example.com"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email.
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="6"
                    className="form-control"
                    placeholder="Your message..."
                    required
                  ></textarea>
                  <div className="invalid-feedback">
                    Please write your message.
                  </div>
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" type="submit">
                    <i className="fas fa-paper-plane me-2"></i>Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="bg-white p-4 rounded shadow-sm h-100 d-flex flex-column justify-content-between">
              <div>
                <h2 className="h5 text-primary fw-bold">Contact Information</h2>
                <p className="text-muted mb-4">
                  Reach us via phone, email, or drop by our office.
                </p>

                <div className="mb-3">
                  <h6 className="fw-semibold mb-1">📍 Address</h6>
                  <p>123 Pune, Loni Kalbhor, 412201</p>
                </div>

                <div className="mb-3">
                  <h6 className="fw-semibold mb-1">📞 Phone</h6>
                  <p>
                    <a
                      href="tel:+1234567890"
                      className="text-decoration-none text-dark"
                    >
                      +1 234 567 890
                    </a>
                  </p>
                </div>

                <div className="mb-3">
                  <h6 className="fw-semibold mb-1">✉️ Email</h6>
                  <p>
                    <a
                      href="mailto:support@travelworld.com"
                      className="text-decoration-none text-dark"
                    >
                      support@travelworld.com
                    </a>
                  </p>
                </div>

                <div>
                  <h6 className="fw-semibold mb-1">🔗 Follow Us</h6>
                  <div className="d-flex gap-3 align-items-center">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary">
  <i className="fab fa-facebook-f fa-lg"></i>
</a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-info">
  <i className="fab fa-twitter fa-lg"></i>
</a>
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-danger">
  <i className="fab fa-instagram fa-lg"></i>
</a>

                  </div>
                </div>
              </div>

              <p className="small mb-0 text-muted mt-3">
                Our support team is available 24/7 — we typically respond within
                24 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5" data-aos="zoom-in">
          <div className="col-12">
            <div className="shadow-sm rounded overflow-hidden">
              <iframe
                title="TravelWorld location"
                src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-100 border-0"
                style={{ height: "420px", borderRadius: "0.5rem" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;

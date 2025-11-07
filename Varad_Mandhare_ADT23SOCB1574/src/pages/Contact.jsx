import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="py-5 text-white text-center"
        style={{
          background: 'linear-gradient(135deg, #4B0082, #FFD700)',
        }}
      >
        <div className="container py-5">
          <h1 className="display-4 fw-bold mb-3">Get in Touch</h1>
          <p className="lead mb-0" style={{ color: 'rgba(255,255,255,0.85)' }}>
            We'd love to hear from you! Reach out with any questions or feedback.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4" style={{ color: '#4B0082' }}>
                Send us a Message
              </h2>
              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn px-4 py-2 fw-semibold"
                  style={{
                    backgroundColor: '#4B0082',
                    color: '#FFD700',
                    borderRadius: '25px',
                  }}
                >
                  <Send size={18} className="me-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4" style={{ color: '#4B0082' }}>
                Contact Information
              </h2>
              <p className="text-muted mb-4">
                Have a question or want to collaborate? We'd love to hear from you.
              </p>

              <div className="d-flex mb-3">
                <MapPin size={28} className="text-warning me-3" />
                <div>
                  <h6 className="fw-bold mb-1">Our Office</h6>
                  <p className="text-muted mb-0">123 Learning Lane, EduCity, 567890</p>
                </div>
              </div>

              <div className="d-flex mb-3">
                <Mail size={28} className="text-warning me-3" />
                <div>
                  <h6 className="fw-bold mb-1">Email Us</h6>
                  <p className="text-muted mb-0">support@learnscape.com</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <Phone size={28} className="text-warning me-3" />
                <div>
                  <h6 className="fw-bold mb-1">Call Us</h6>
                  <p className="text-muted mb-0">+1 (234) 567-8901</p>
                </div>
              </div>

              <h6 className="fw-bold mb-3">Follow Us</h6>
              <div className="d-flex gap-3">
                <a href="#" className="btn btn-outline-dark rounded-circle p-2">
                  <Instagram size={20} />
                </a>
                <a href="#" className="btn btn-outline-dark rounded-circle p-2">
                  <Twitter size={20} />
                </a>
                <a href="#" className="btn btn-outline-dark rounded-circle p-2">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

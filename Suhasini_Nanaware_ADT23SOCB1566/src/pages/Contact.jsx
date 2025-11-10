import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="overlay">
          <h1 className="hero-title">Contact <span>Gourmet Delight</span></h1>
          <p className="hero-subtitle">
            We'd love to hear from you — whether it’s a question, feedback, or a reservation inquiry!
          </p>
        </div>
      </div>

      <div className="contact-container">
        <div className="form-card">
          <h2 className="section-title">Get in Touch</h2>

          {sent && (
            <div className="alert-success">✅ Your message has been sent successfully!</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Send Message ✉️
            </button>
          </form>
        </div>

        <div className="info-card">
          <h3>📍 Visit Us</h3>
          <p>123 Gourmet Street, Food City, India</p>

          <h3>📞 Call Us</h3>
          <p>+91 98765 43210</p>

          <h3>📧 Email</h3>
          <p>support@gourmetdelight.com</p>

          <h3>⏰ Timings</h3>
          <p>Mon - Sun: 10:00 AM - 10:00 PM</p>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Contact() {
  const { showToast } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast("Please fill all fields", "error");
      return;
    }
    showToast("Message sent successfully!", "success");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="contact-section py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Contact Us</h2>
          <p className="text-muted">
            We'd love to hear from you! Fill out the form below.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-md-6">
            <img
              src="/images/i6.jpg"
              alt="Customer Service"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
              <div className="mb-3">
                <label className="form-label fw-bold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Your message has been submitted successfully!");
    console.log(form);
  };

  return (
    <div className="container mt-5 pt-5 text-light">
      <h2 className="text-warning mb-4 fw-bold">Contact Us</h2>
      <p>
        Have questions, feedback, or need help with something?  
        We're here to assist you. Fill out the form below, and we will get back to you.
      </p>

      <div className="row mt-4">
        {/* Contact Form */}
        <div className="col-md-7">
          <div className="card bg-dark text-light p-4 shadow">
            <h4 className="text-warning mb-3">Send a Message</h4>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Subject</label>
                <select
                  name="subject"
                  className="form-select"
                  value={form.subject}
                  onChange={handleChange}
                >
                  <option>General Inquiry</option>
                  <option>Course Related Question</option>
                  <option>Technical Support</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label>Your Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Type your message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-warning w-100 fw-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-md-5 mt-4 mt-md-0">
          <div className="card bg-dark text-light p-4 shadow">
            <h4 className="text-warning mb-3">Reach Us</h4>
            <p>
              <strong>Email:</strong> support@dsalearning.com  
              <br />
              <strong>Phone:</strong> +91 87998 50579 
              <br />
              <strong>Location:</strong> Pune, Maharashtra, India
            </p>

            <h5 className="text-warning mt-3">Follow Us</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-warning"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-warning"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-warning"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-warning"><i className="fab fa-github"></i></a>
            </div>

            <h5 className="text-warning mt-4">Support Hours</h5>
            <p>Monday – Friday: 10 AM to 6 PM  
            <br /> Saturday: 10 AM to 2 PM  
            <br /> Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="container mt-5 pt-5">
      
      {/* Hero Section */}
      <section className="text-center py-4 mb-4 bg-dark text-light rounded shadow">
        <h2 className="fw-bold text-warning">Contact Us</h2>
        <p className="lead">
          Have feedback, partnership ideas, or need training advice? We’re here to help you stay on track.
        </p>
      </section>

      {/* Contact Info Section */}
      <section className="row text-center mb-5">
        <div className="col-md-3 mb-4">
          <div className="card border-0 shadow-sm py-4">
            <h5 className="text-warning fw-bold mb-2">📧 Email</h5>
            <p className="text-muted mb-0">support@fittrackplus.com</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card border-0 shadow-sm py-4">
            <h5 className="text-warning fw-bold mb-2">📞 Phone</h5>
            <p className="text-muted mb-0">+91 98765 43210</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card border-0 shadow-sm py-4">
            <h5 className="text-warning fw-bold mb-2">📍 Address</h5>
            <p className="text-muted mb-0">Pune, Maharashtra, India</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card border-0 shadow-sm py-4">
            <h5 className="text-warning fw-bold mb-2">🕒 Support Hours</h5>
            <p className="text-muted mb-0">Mon – Sat: 9 AM – 7 PM</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h3 className="text-center text-warning fw-bold mb-3">Send Us a Message</h3>
        <p className="text-center text-muted mb-4">
          Fill out the form below and our team will get back to you shortly.
        </p>

        <form
          className="shadow p-4 rounded bg-light mx-auto"
          style={{ maxWidth: "650px" }}
        >
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Full Name</label>
              <input type="text" className="form-control" placeholder="Asad Nadaf" required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Email</label>
              <input type="email" className="form-control" placeholder="asad69@example.com" required />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Subject</label>
            <input type="text" className="form-control" placeholder="I need help with my account..." required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Message</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button className="btn btn-warning w-100 fw-bold py-2">Send Message</button>
        </form>
      </section>

      {/* Map Section */}
      <section className="mt-5">
        <h4 className="text-center text-warning fw-bold mb-3">Find Us</h4>
        <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
          <iframe
            title="FitTrack+ Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.366654217733!2d73.85674371437118!3d18.52043068740156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06b0e4e2b5f%3A0x1a4c9b7efb3e7b90!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1633863945010!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-warning text-dark py-5 rounded shadow mt-5 mb-5">
        <h3 className="fw-bold mb-3">We’d Love to Hear From You!</h3>
        <p className="lead mb-3">
          Whether it’s feedback, partnership opportunities, or general inquiries — let’s connect.
        </p>
        <a href="mailto:support@fittrackplus.com" className="btn btn-dark fw-bold px-4">
          Email Us Directly
        </a>
      </section>
    </div>
  );
}

export default Contact;

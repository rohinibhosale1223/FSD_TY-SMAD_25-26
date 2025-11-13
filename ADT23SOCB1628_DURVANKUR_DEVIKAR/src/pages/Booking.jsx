import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Booking() {
  const modalRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });

    const today = new Date().toISOString().split("T")[0];
    document.getElementById("startDate").setAttribute("min", today);
    document.getElementById("endDate").setAttribute("min", today);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const startVal = form.startDate.value;
    const endVal = form.endDate.value;
    if (new Date(endVal) < new Date(startVal)) {
      alert("End date must be after start date!");
      return;
    }

    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();
    form.reset();
    form.classList.remove("was-validated");
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <main className="container py-5 flex-grow-1">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6" data-aos="zoom-in">
            <div className="card card-rounded shadow-sm">
              <div className="card-body p-4">
                <h2 className="h4 text-primary fw-bold text-center mb-3">
                  <i className="fas fa-plane-departure me-2"></i>Book Your Trip
                </h2>
                <p className="text-muted text-center mb-4">
                  Tell us basic details and we'll prepare a booking (demo).
                </p>

                <form id="bookingForm" className="needs-validation" noValidate onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="destination" className="form-label">Select Destination</label>
                    <select id="destination" name="destination" className="form-select" required>
                      <option value="">Choose destination</option>
                      <option value="paris">Paris</option>
                      <option value="london">London</option>
                      <option value="tokyo">Tokyo</option>
                      <option value="dubai">Dubai</option>
                    </select>
                    <div className="invalid-feedback">Please choose a destination.</div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-6">
                      <label htmlFor="startDate" className="form-label">Start Date</label>
                      <input id="startDate" name="startDate" type="date" className="form-control" required />
                      <div className="invalid-feedback">Start date is required.</div>
                    </div>
                    <div className="col-6">
                      <label htmlFor="endDate" className="form-label">End Date</label>
                      <input id="endDate" name="endDate" type="date" className="form-control" required />
                      <div className="invalid-feedback">End date is required and must be after start date.</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="travelers" className="form-label">Number of Travelers</label>
                    <input id="travelers" name="travelers" type="number" min="1" max="20" className="form-control" placeholder="e.g. 2" required />
                    <div className="invalid-feedback">Enter a number of travelers (1–20).</div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="requests" className="form-label">Special Requests</label>
                    <textarea id="requests" name="requests" rows="4" className="form-control" placeholder="Any special requirements..."></textarea>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      <i className="fas fa-check me-2"></i>Submit Booking
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="modal fade" ref={modalRef} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Booking Submitted</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              Your booking request was submitted successfully (demo). You’ll receive confirmation soon.
            </div>
            <div className="modal-footer">
              <a href="/profile" className="btn btn-outline-primary">Go to Profile</a>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

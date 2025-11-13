import React, { useRef } from "react";

export default function Profile() {
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    const fullname = form.fullname.value.trim();
    const email = form.email.value.trim();
    const newpass = form.newpass.value;
    const confirmpass = form.confirmpass.value;

    let valid = true;

    // Validation
    if (!fullname) {
      form.fullname.classList.add("is-invalid");
      valid = false;
    } else {
      form.fullname.classList.remove("is-invalid");
    }

    if (!email || !/.+@.+\..+/.test(email)) {
      form.email.classList.add("is-invalid");
      valid = false;
    } else {
      form.email.classList.remove("is-invalid");
    }

    if (newpass || confirmpass) {
      if (newpass !== confirmpass || newpass.length < 8) {
        form.confirmpass.classList.add("is-invalid");
        valid = false;
      } else {
        form.confirmpass.classList.remove("is-invalid");
      }
    } else {
      form.confirmpass.classList.remove("is-invalid");
    }

    if (valid) {
      const modalEl = document.getElementById("successModal");
      const bsModal = new window.bootstrap.Modal(modalEl);
      bsModal.show();
    }
  }

  return (
    <>
      <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <h1 className="h4 text-center text-primary fw-bold mb-4">
              <i className="fas fa-user-circle me-2" aria-hidden="true" /> Your Profile
            </h1>

            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label fw-semibold">
                  Full Name
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  className="form-control"
                  defaultValue="Om Dev"
                  required
                />
                <div className="invalid-feedback">Please enter your full name.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  defaultValue="omdev@example.com"
                  required
                  autoComplete="email"
                />
                <div className="invalid-feedback">Please provide a valid email.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="newpass" className="form-label fw-semibold">
                  New Password
                </label>
                <input
                  id="newpass"
                  name="newpass"
                  type="password"
                  className="form-control"
                  placeholder="Leave blank to keep current"
                  autoComplete="new-password"
                />
                <div className="form-text">Use at least 8 characters for a strong password.</div>
              </div>

              <div className="mb-4">
                <label htmlFor="confirmpass" className="form-label fw-semibold">
                  Confirm New Password
                </label>
                <input
                  id="confirmpass"
                  name="confirmpass"
                  type="password"
                  className="form-control"
                  placeholder="Repeat new password"
                  autoComplete="new-password"
                />
                <div className="invalid-feedback">Passwords do not match.</div>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary fw-semibold">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="successModal"
        tabIndex="-1"
        aria-labelledby="successModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="successModalLabel">
                Profile Updated
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              Your profile has been updated successfully (demo only).
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

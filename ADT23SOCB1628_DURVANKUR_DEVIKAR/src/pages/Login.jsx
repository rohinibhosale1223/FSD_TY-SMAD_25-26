import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const formRef = useRef(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }
    navigate("/profile");
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light"
      style={{ minHeight: "80vh" }}
    >
      <div className="card shadow-lg border-0 p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center text-primary fw-bold mb-4">Welcome Back!</h2>

        <form ref={formRef} className="needs-validation" noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label fw-semibold">
              Email
            </label>
            <input
              id="loginEmail"
              name="email"
              type="email"
              className="form-control"
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
            <div className="invalid-feedback">Please provide a valid email.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label fw-semibold">
              Password
            </label>
            <input
              id="loginPassword"
              name="password"
              type="password"
              className="form-control"
              placeholder="********"
              required
              autoComplete="current-password"
            />
            <div className="invalid-feedback">Please enter your password.</div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-4 mb-0 small text-muted">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary fw-semibold">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}

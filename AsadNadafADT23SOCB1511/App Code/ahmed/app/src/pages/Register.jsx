function Register() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row align-items-center shadow-lg rounded overflow-hidden">
        
        {/* Left Side - Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="/register-fitness.svg"
            alt="Join FitTrack+"
            className="img-fluid h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Side - Form */}
        <div className="col-md-6 bg-light p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-warning">Join FitTrack+</h2>
            <p className="text-muted">
              Create your account and start your fitness journey with smart tracking and personalized plans.
            </p>
          </div>

          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-bold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Asad Nadaf"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="asad69@example.com"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-bold">Fitness Goal</label>
                <select className="form-select" required>
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>Endurance</option>
                  <option>Overall Wellness</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Gender</label>
                <select className="form-select" required>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-bold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-enter password"
                  required
                />
              </div>
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                required
              />
              <label htmlFor="terms" className="form-check-label text-muted">
                I agree to the{" "}
                <a href="/terms" className="text-warning text-decoration-none">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button className="btn btn-warning w-100 fw-bold py-2 mb-3">
              Register
            </button>

            <p className="text-center text-muted">
              Already have an account?{" "}
              <a href="/login" className="text-warning fw-bold text-decoration-none">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* CTA Section */}
      <section className="text-center bg-warning text-dark py-5 rounded shadow mt-5 mb-5">
        <h3 className="fw-bold mb-3">Take the First Step Toward a Better You</h3>
        <p className="lead mb-3">
          Track smarter, recover faster, and reach your fitness goals with FitTrack+.
        </p>
        <a href="/login" className="btn btn-dark fw-bold px-4">
          Already a Member? Login
        </a>
      </section>
    </div>
  );
}

export default Register;

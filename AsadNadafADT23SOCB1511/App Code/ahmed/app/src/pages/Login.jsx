function Login() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row align-items-center shadow-lg rounded overflow-hidden">
        
        {/* Left Side - Image / Branding */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="/login-fitness.svg"
            alt="FitTrack+ Login"
            className="img-fluid h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Side - Form */}
        <div className="col-md-6 bg-light p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-warning">Welcome Back</h2>
            <p className="text-muted">Login to continue your fitness journey with FitTrack+</p>
          </div>

          <form>
            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <input type="checkbox" className="form-check-input me-2" id="rememberMe" />
                <label htmlFor="rememberMe" className="form-check-label text-muted">
                  Remember me
                </label>
              </div>
              <a href="/forgot-password" className="text-warning fw-bold small text-decoration-none">
                Forgot Password?
              </a>
            </div>

            <button className="btn btn-warning w-100 fw-bold py-2">Login</button>

            <p className="text-center mt-4 text-muted">
              Don’t have an account?{" "}
              <a href="/signup" className="text-warning fw-bold text-decoration-none">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* CTA Section */}
      <section className="text-center bg-warning text-dark py-5 rounded shadow mt-5 mb-5">
        <h3 className="fw-bold mb-3">Stay Consistent. Stay Strong.</h3>
        <p className="lead mb-3">
          Log in to track your workouts, monitor your progress, and recover better.
        </p>
        <a href="/register" className="btn btn-dark fw-bold px-4">
          Create Account
        </a>
      </section>
    </div>
  );
}

export default Login;

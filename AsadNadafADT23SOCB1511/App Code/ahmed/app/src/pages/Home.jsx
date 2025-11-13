function Home() {
  return (
    <div className="container mt-5 pt-5">

      {/* Hero Section */}
      <section className="text-center py-5">
        <h1 className="fw-bold text-warning display-5">Welcome to FitTrack+</h1>
        <p className="lead text-muted">
          Your ultimate fitness partner — Track workouts, stay consistent, and recover stronger.
        </p>

        {/* Centered Image */}
        <div className="d-flex justify-content-center">
          <img
            src="products.jpg"
            alt="Gym Banner"
            className="rounded shadow my-4"
            style={{ width: "60%", maxWidth: "500px", height: "auto" }}
          />
        </div>

        {/* Button below image */}
        <a href="/products" className="btn btn-warning fw-bold px-4 mt-3">
          Shop Recovery Gear
        </a>
      </section>


      {/* Features Section */}
      <section className="text-center mt-5">
        <h2 className="fw-bold text-warning mb-3">Why Choose FitTrack+</h2>
        <div className="row text-start">
          <div className="col-md-4">
            <h5>📊 Smart Tracking</h5>
            <p>Log your workouts and analyze progress with real-time performance charts.</p>
          </div>
          <div className="col-md-4">
            <h5>💪 Personalized Plans</h5>
            <p>AI-driven workout plans tailored to your fitness goals and body type.</p>
          </div>
          <div className="col-md-4">
            <h5>🧘 Recovery Focused</h5>
            <p>Shop premium recovery products that accelerate muscle repair and performance.</p>
          </div>
        </div>
      </section>


      {/* Stats / Motivation Section */}
      <section className="text-center bg-dark text-light rounded py-5 mt-5 shadow">
        <h2 className="fw-bold text-warning mb-4">Join Thousands of Active Members</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <h3 className="fw-bold">10K+</h3>
            <p>Workouts Logged</p>
          </div>
          <div className="col-md-4 mb-3">
            <h3 className="fw-bold">5K+</h3>
            <p>Active Users</p>
          </div>
          <div className="col-md-4 mb-3">
            <h3 className="fw-bold">1.2K+</h3>
            <p>Transformations Completed</p>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="text-center mt-5 mb-5">
        <h2 className="fw-bold text-warning mb-4">What Our Members Say</h2>
        <div className="row">
          <div className="col-md-4">
            <blockquote>“FitTrack+ helped me stay consistent and track my growth.”</blockquote>
            <footer className="blockquote-footer">– Arjun Singh</footer>
          </div>
          <div className="col-md-4">
            <blockquote>“Their recovery supplements are top-notch!”</blockquote>
            <footer className="blockquote-footer">– Priya Rao</footer>
          </div>
          <div className="col-md-4">
            <blockquote>“Great interface and super easy tracking tools.”</blockquote>
            <footer className="blockquote-footer">– Rohan Patil</footer>
          </div>
        </div>
      </section>


      {/* Call To Action */}
      <section className="text-center bg-warning text-dark py-5 rounded shadow mb-5">
        <h2 className="fw-bold mb-3">Ready to Take Your Fitness to the Next Level?</h2>
        <p className="lead">Start tracking smarter and recovering faster — all in one place.</p>
        <a href="/register" className="btn btn-dark fw-bold px-4 mt-2">
          Join FitTrack+ Now
        </a>
      </section>
    </div>
  );
}

export default Home;

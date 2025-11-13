function About() {
  return (
    <div className="container mt-5 pt-5">
      {/* Header */}
      <h2 className="text-center text-warning fw-bold mb-4">About FitTrack+</h2>
      <p className="fs-5 text-muted text-center mb-5">
        FitTrack+ was built with one mission — to help people train smarter, recover better, 
        and perform their best. Our platform combines smart tracking, personalized plans, 
        and recovery tools to keep you progressing every day.
      </p>

      {/* Who We Are */}
      <section className="row align-items-center mb-5">
        <div className="col-md-6">
          <img 
            src="/about-fitness.jpg" 
            className="img-fluid rounded shadow" 
            alt="About FitTrack+" 
          />
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold text-warning mb-3">Who We Are</h4>
          <p>
            We are a team of fitness enthusiasts, athletes, and developers passionate 
            about using technology to make fitness more efficient and enjoyable. 
            From tracking your lifts to recommending recovery gear, 
            FitTrack+ simplifies your fitness journey with precision and motivation.
          </p>
          <p>
            Whether you’re a beginner or a seasoned athlete, our tools help you 
            stay accountable, measure your performance, and evolve towards your peak potential.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="text-center bg-dark text-light rounded py-5 shadow mb-5">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h4 className="text-warning fw-bold mb-3">Our Mission</h4>
            <p className="mx-3">
              To revolutionize the fitness experience by making data-driven training 
              and recovery accessible to everyone — anytime, anywhere.
            </p>
          </div>
          <div className="col-md-6">
            <h4 className="text-warning fw-bold mb-3">Our Vision</h4>
            <p className="mx-3">
              To become the world’s most trusted fitness companion app, 
              inspiring millions to train intelligently and recover efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center mb-5">
        <h3 className="fw-bold text-warning mb-4">Meet Our Team</h3>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img src="/team1.jpg" className="card-img-top rounded-top" alt="Team Member" />
              <div className="card-body">
                <h5 className="fw-bold">Asad Nadaf</h5>
                <p className="text-muted">Founder & Head Coach</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img src="/team2.jpg" className="card-img-top rounded-top" alt="Team Member" />
              <div className="card-body">
                <h5 className="fw-bold">Samyak Kedari</h5>
                <p className="text-muted">Nutrition & Recovery Expert</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img src="/team3.jpg" className="card-img-top rounded-top" alt="Team Member" />
              <div className="card-body">
                <h5 className="fw-bold">Om Dhawade</h5>
                <p className="text-muted">App Developer & Tech Lead</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="text-center bg-warning text-dark py-5 rounded shadow">
        <h2 className="fw-bold mb-3">Join the FitTrack+ Movement</h2>
        <p className="lead">
          Start tracking, improving, and transforming your fitness journey today.
        </p>
        <a href="/register" className="btn btn-dark fw-bold px-4 mt-2">
          Get Started
        </a>
      </section>
    </div>
  );
}

export default About;

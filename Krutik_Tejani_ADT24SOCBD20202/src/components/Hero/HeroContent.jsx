const HeroContent = () => {
  return (
    <div className="hero-content">
      <span className="hero-badge">🎉 New Collection 2025</span>
      <h1 className="hero-title">
        Discover Joy in Every <span className="gradient-text">Toy</span>
      </h1>
      <p className="hero-description">
        Explore our curated collection of educational, fun, and engaging toys 
        that spark imagination and creativity in children of all ages.
      </p>
      <div className="hero-buttons">
        <button className="btn btn-primary">Shop Now</button>
        <button className="btn btn-secondary">View Collections</button>
      </div>
      <div className="hero-stats">
        <div className="stat">
          <span className="stat-number">5000+</span>
          <span className="stat-label">Products</span>
        </div>
        <div className="stat">
          <span className="stat-number">50K+</span>
          <span className="stat-label">Happy Customers</span>
        </div>
        <div className="stat">
          <span className="stat-number">4.9★</span>
          <span className="stat-label">Rating</span>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
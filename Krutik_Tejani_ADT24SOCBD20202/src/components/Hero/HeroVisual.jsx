const HeroVisual = () => {
  return (
    <div className="hero-visual">
      <div className="floating-card card-1">
        <span className="card-icon">🎮</span>
        <span className="card-text">Gaming</span>
      </div>
      <div className="floating-card card-2">
        <span className="card-icon">🧸</span>
        <span className="card-text">Plush</span>
      </div>
      <div className="floating-card card-3">
        <span className="card-icon">🚗</span>
        <span className="card-text">Vehicles</span>
      </div>
      <div className="hero-image-container">
        <div className="hero-image">
          <span className="hero-emoji">🎁</span>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
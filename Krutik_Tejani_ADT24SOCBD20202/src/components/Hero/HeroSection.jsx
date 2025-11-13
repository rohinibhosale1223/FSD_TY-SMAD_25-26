import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
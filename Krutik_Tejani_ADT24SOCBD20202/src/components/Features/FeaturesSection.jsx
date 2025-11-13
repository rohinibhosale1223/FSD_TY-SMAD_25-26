import FeatureCard from './FeatureCard';
import { features } from '../../data/data';

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {features.map(feature => (
            <FeatureCard 
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
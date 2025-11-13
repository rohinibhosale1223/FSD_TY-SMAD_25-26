import CategoryCard from './CategoryCard';
import { categories } from '../../data/data';

const CategoriesSection = () => {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Find the perfect toy for every age and interest
          </p>
        </div>
        <div className="categories-grid">
          {categories.map(category => (
            <CategoryCard 
              key={category.id}
              icon={category.icon}
              name={category.name}
              description={category.description}
              itemCount={category.itemCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
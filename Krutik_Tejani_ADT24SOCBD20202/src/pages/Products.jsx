import { useState } from 'react';
import ProductsSection from '../components/Products/ProductsSection';
import { categories } from '../data/data';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-title">Our Products</h1>
            <p className="page-subtitle">
              Discover amazing toys from top brands at unbeatable prices
            </p>
          </div>
        </div>
      </section>

      <section className="product-filters">
        <div className="container">
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All Products
            </button>
            {categories.map(category => (
              <button 
                key={category.id}
                className={`filter-tab ${selectedCategory === category.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <ProductsSection selectedCategory={selectedCategory} />
    </>
  );
};

export default Products;
import ProductCard from './ProductCard';
import SectionHeader from './SectionHeader';
import { products } from '../../data/data';

const ProductsSection = ({ selectedCategory }) => {
  const filteredProducts = selectedCategory && selectedCategory !== 'All' 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <section className="products" id="products">
      <div className="container">
        {!selectedCategory && (
          <SectionHeader 
            title="Featured Products"
            subtitle="Discover our most popular toys loved by kids worldwide"
          />
        )}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
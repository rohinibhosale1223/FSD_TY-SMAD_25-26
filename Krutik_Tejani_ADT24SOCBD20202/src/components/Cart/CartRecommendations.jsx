import ProductCard from '../Products/ProductCard';

const CartRecommendations = ({ products }) => {
  return (
    <section className="cart-recommendations">
      <div className="container">
        <h2 className="recommendations-title">You May Also Like</h2>
        <div className="recommendations-grid">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CartRecommendations;
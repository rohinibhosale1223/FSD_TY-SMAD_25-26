import { FiHeart, FiShoppingCart, FiTrash2, FiStar } from 'react-icons/fi';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const Wishlist = ({ setCurrentPage }) => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const handleRemove = (productId) => {
    removeFromWishlist(productId);
  };

  const handleContinueShopping = () => {
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (wishlistItems.length === 0) {
    return (
      <section className="wishlist-empty-page">
        <div className="container">
          <div className="empty-wishlist-modern">
            <div className="empty-animation">
              <div className="heart-icon-large">💝</div>
              <div className="floating-hearts">
                <span className="heart h1">❤️</span>
                <span className="heart h2">💕</span>
                <span className="heart h3">💗</span>
                <span className="heart h4">💖</span>
              </div>
            </div>
            <h2 className="empty-title">Your Wishlist is Empty</h2>
            <p className="empty-description">
              Save your favorite toys here and never lose track of what you love!
              <br />
              Start adding items to create your perfect toy collection.
            </p>
            <div className="empty-features">
              <div className="empty-feature">
                <span className="feature-emoji">⭐</span>
                <span>Save favorites</span>
              </div>
              <div className="empty-feature">
                <span className="feature-emoji">🔔</span>
                <span>Get price alerts</span>
              </div>
              <div className="empty-feature">
                <span className="feature-emoji">🎁</span>
                <span>Easy shopping</span>
              </div>
            </div>
            <button 
              className="btn btn-primary btn-large"
              onClick={handleContinueShopping}
            >
              🛍️ Start Shopping
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="wishlist-filled-page">
      <div className="wishlist-hero">
        <div className="container">
          <div className="wishlist-hero-content">
            <div className="hero-icon">💝</div>
            <h1 className="wishlist-hero-title">My Wishlist</h1>
            <p className="wishlist-hero-subtitle">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'treasure' : 'treasures'} saved for you
            </p>
          </div>
        </div>
      </div>

      <div className="container wishlist-container">
        <div className="wishlist-grid-modern">
          {wishlistItems.map(item => (
            <div key={item.id} className="wishlist-card-modern">
              <button 
                className="wishlist-remove-btn"
                onClick={() => handleRemove(item.id)}
                title="Remove from wishlist"
              >
                <FiTrash2 />
              </button>

              {item.badge && (
                <span className={`product-badge badge-${item.badge.toLowerCase()}`}>
                  {item.badge}
                </span>
              )}

              <div className="wishlist-card-image">
                <span className="product-emoji-large">{item.image}</span>
              </div>

              <div className="wishlist-card-content">
                <h3 className="wishlist-product-name">{item.name}</h3>
                <p className="wishlist-product-category">
                  <span className="category-icon">🏷️</span>
                  {item.category}
                </p>
                
                <div className="wishlist-rating">
                  <FiStar className="star-filled" />
                  <span className="rating-value">{item.rating}</span>
                  <span className="rating-reviews">({item.reviews} reviews)</span>
                </div>

                <div className="wishlist-price-section">
                  <div className="price-group">
                    <span className="current-price">₹{item.price}</span>
                    {item.originalPrice && (
                      <span className="original-price">₹{item.originalPrice}</span>
                    )}
                  </div>
                  {item.originalPrice && (
                    <span className="discount-badge">
                      Save ₹{(item.originalPrice - item.price).toFixed(2)}
                    </span>
                  )}
                </div>

                <button 
                  className="wishlist-cart-btn"q
                  onClick={() => handleAddToCart(item)}
                >
                  <FiShoppingCart />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="wishlist-actions">
          <button 
            className="btn btn-outline btn-large"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
          <button 
            className="btn btn-primary btn-large"
            onClick={() => {
              wishlistItems.forEach(item => addToCart(item));
              alert('All items added to cart!');
            }}
          >
            <FiShoppingCart />
            Add All to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
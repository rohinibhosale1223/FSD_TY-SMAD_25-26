import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { name, price, originalPrice, rating, reviews, image, badge } = product;
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isAdded, setIsAdded] = useState(false);
  
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="product-card">
      {badge && <span className={`product-badge badge-${badge.toLowerCase()}`}>{badge}</span>}
      
      <div className="product-image">
        <span className="product-emoji">{image}</span>
        <button 
          className={`wishlist-btn ${inWishlist ? 'active' : ''}`}
          onClick={handleWishlistToggle}
        >
          <FiHeart />
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        
        <div className="product-rating">
          <FiStar className="star-icon filled" />
          <span className="rating-value">{rating}</span>
          <span className="rating-reviews">({reviews})</span>
        </div>

        <div className="product-price">
          <span className="price-current">₹{price}</span>
          {originalPrice && (
            <span className="price-original">₹{originalPrice}</span>
          )}
        </div>

        <button 
          className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
          onClick={handleAddToCart}
        >
          <FiShoppingCart />
          <span>{isAdded ? 'Added!' : 'Add to Cart'}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
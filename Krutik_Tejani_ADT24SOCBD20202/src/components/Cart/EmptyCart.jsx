import { FiShoppingCart } from 'react-icons/fi';

const EmptyCart = ({ onContinueShopping }) => {
  return (
    <div className="empty-cart-modern">
      <div className="empty-animation">
        <div className="cart-icon-large">🛒</div>
        <div className="floating-items">
          <span className="item i1">🎮</span>
          <span className="item i2">🧸</span>
          <span className="item i3">🎨</span>
          <span className="item i4">🚗</span>
        </div>
      </div>
      <h2 className="empty-title">Your Cart is Empty</h2>
      <p className="empty-description">
        Looks like you haven't added any toys to your cart yet.
        <br />
        Start shopping and discover amazing toys!
      </p>
      <div className="empty-features">
        <div className="empty-feature">
          <span className="feature-emoji">🚚</span>
          <span>Free shipping over ₹50</span>
        </div>
        <div className="empty-feature">
          <span className="feature-emoji">🔒</span>
          <span>Secure checkout</span>
        </div>
        <div className="empty-feature">
          <span className="feature-emoji">↩️</span>
          <span>Easy returns</span>
        </div>
      </div>
      <button 
        className="btn btn-primary btn-large"
        onClick={onContinueShopping}
      >
        🛍️ Start Shopping
      </button>
    </div>
  );
};

export default EmptyCart;
import { FiShoppingBag, FiArrowRight } from 'react-icons/fi';

const CartSummary = ({ subtotal, shipping, tax, total, itemCount, onContinueShopping }) => {
  return (
    <div className="cart-summary">
      <h2 className="cart-summary-title">Order Summary</h2>
      
      <div className="cart-summary-details">
        <div className="summary-row">
          <span>Subtotal ({itemCount} items)</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        
        <div className="summary-row">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</span>
        </div>
        
        <div className="summary-row">
          <span>Tax (10%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        
        <div className="summary-divider"></div>
        
        <div className="summary-row summary-total">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>

      <button className="btn btn-primary checkout-btn">
        <FiShoppingBag />
        <span>Proceed to Checkout</span>
        <FiArrowRight />
      </button>

      <div className="cart-summary-badges">
        <div className="summary-badge">
          <span className="badge-icon">🚚</span>
          <span className="badge-text">Free shipping on orders over ₹50</span>
        </div>
        <div className="summary-badge">
          <span className="badge-icon">🔒</span>
          <span className="badge-text">Secure checkout</span>
        </div>
      </div>

      <div className="continue-shopping">
        <a href="#" className="continue-link">← Continue Shopping</a>
      </div>
    </div>
  );
};

export default CartSummary;
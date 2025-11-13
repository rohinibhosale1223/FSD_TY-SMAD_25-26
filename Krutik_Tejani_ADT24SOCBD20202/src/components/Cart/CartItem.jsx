import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <span className="cart-item-emoji">{item.image}</span>
      </div>
      
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-category">{item.category}</p>
        <div className="cart-item-price">
          <span className="price">₹{item.price}</span>
          {item.originalPrice && (
            <span className="original-price">₹{item.originalPrice}</span>
          )}
        </div>
      </div>

      <div className="cart-item-quantity">
        <button 
          className="quantity-btn"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          <FiMinus />
        </button>
        <span className="quantity-value">{item.quantity}</span>
        <button 
          className="quantity-btn"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          <FiPlus />
        </button>
      </div>

      <div className="cart-item-total">
        <span className="total-price">₹{(item.price * item.quantity).toFixed(2)}</span>
      </div>

      <button 
        className="cart-item-remove"
        onClick={() => onRemove(item.id)}
      >
        <FiTrash2 />
      </button>
    </div>
  );
};

export default CartItem;
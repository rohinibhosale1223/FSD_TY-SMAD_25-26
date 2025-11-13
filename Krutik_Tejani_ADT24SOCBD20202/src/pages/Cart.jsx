import CartItem from '../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';
import EmptyCart from '../components/Cart/EmptyCart';
import CartRecommendations from '../components/Cart/CartRecommendations';
import { products } from '../data/data';
import { useCart } from '../context/CartContext';

const Cart = ({ setCurrentPage }) => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();  

  const handleUpdateQuantity = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleContinueShopping = () => {
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <>
        <section className="cart-page">
          <div className="container">
            <EmptyCart onContinueShopping={handleContinueShopping} />
          </div>
        </section>
        <CartRecommendations products={products} />
      </>
    );
  }

  return (
    <>
      <section className="cart-page">
        <div className="container">
          <div className="cart-header">
            <h1 className="cart-title">Shopping Cart</h1>
            <p className="cart-subtitle">{itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart</p>
          </div>

          <div className="cart-content">
            <div className="cart-items-section">
              <div className="cart-items-header">
                <span className="header-product">Product</span>
                <span className="header-quantity">Quantity</span>
                <span className="header-total">Total</span>
              </div>
              
              <div className="cart-items-list">
                {cartItems.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </div>
            </div>

            <CartSummary 
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
              itemCount={itemCount}
            />
          </div>
        </div>
      </section>
      <CartRecommendations products={products} />
    </>
  );
};

export default Cart;
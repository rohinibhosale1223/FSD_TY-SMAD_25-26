import { FiShoppingCart, FiHeart, FiUser, FiLogOut } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const { getCartItemCount } = useCart();
  const { getWishlistCount } = useWishlist();
  const { isAuthenticated, user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const cartCount = getCartItemCount();
  const wishlistCount = getWishlistCount();

  const navLinks = [
    { id: 1, name: "Home", page: "home" },
    { id: 2, name: "Categories", page: "categories" },
    { id: 3, name: "Products", page: "products" },
    { id: 4, name: "About", page: "about" },
    { id: 5, name: "Contact", page: "contact" }
  ];

  const handleNavClick = (link) => {
    setCurrentPage(link.page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="nav-links">
        {navLinks.map(link => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link)}
            className={`nav-link ${currentPage === link.page ? 'active' : ''}`}
          >
            {link.name}
          </button>
        ))}
      </nav>
      
      <div className="nav-icons">
        <button 
          className="icon-btn"
          onClick={() => {
            setCurrentPage('wishlist');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <FiHeart />
          {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
        </button>
        
        <button 
          className="icon-btn"
          onClick={() => {
            setCurrentPage('cart');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <FiShoppingCart />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </button>
        
        <div className="user-menu-wrapper">
          <button 
            className="icon-btn"
            onClick={() => {
              if (isAuthenticated) {
                setShowUserMenu(!showUserMenu);
              } else {
                setCurrentPage('login');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <FiUser />
          </button>
          
          {showUserMenu && isAuthenticated && (
            <div className="user-dropdown">
              <div className="user-info">
                <span className="user-avatar">{user?.avatar}</span>
                <div>
                  <p className="user-name">{user?.name}</p>
                  <p className="user-email">{user?.email}</p>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item">My Profile</button>
              <button className="dropdown-item">My Orders</button>
              <button 
                className="dropdown-item"
                onClick={() => {
                  setCurrentPage('wishlist');
                  setShowUserMenu(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Wishlist
              </button>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item logout" onClick={handleLogout}>
                <FiLogOut /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
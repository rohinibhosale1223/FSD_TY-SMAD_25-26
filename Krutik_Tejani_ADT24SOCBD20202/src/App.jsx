import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'categories':
        return <Categories />;
      case 'products':
        return <Products />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'cart':
        return <Cart setCurrentPage={setCurrentPage} />;
      case 'wishlist':
        return <Wishlist setCurrentPage={setCurrentPage} />;
      case 'login':
        return <Login setCurrentPage={setCurrentPage} />;
      case 'register':
        return <Register setCurrentPage={setCurrentPage} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      {currentPage !== 'login' && currentPage !== 'register' && (
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      <main>
        {renderPage()}
      </main>
      {currentPage !== 'login' && currentPage !== 'register' && currentPage !== 'wishlist' && (
        <Footer />
      )}
    </div>
  );
}

export default App;
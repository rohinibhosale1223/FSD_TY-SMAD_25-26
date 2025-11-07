import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";

import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart"; 
import Checkout from "./pages/Checkout"; 


import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      
      <div className="d-flex flex-column min-vh-100">
        
        <Navbar />

  
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            
             <Route path="/cart" element={<Cart />} /> 
              <Route path="/checkout" element={<Checkout />} />
         
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

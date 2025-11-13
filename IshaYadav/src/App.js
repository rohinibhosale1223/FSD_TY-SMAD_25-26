import React, { useState } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AuthScreen } from "./pages/AuthScreen";
import { CartPage } from "./pages/CartPage";
import { AddEventPage } from "./pages/AddEventPage";
import { MessageBox } from "./components/MessageBox";
import { NavBar } from "./components/NavBar";
import { initialEvents } from "./data/events";
import { AboutPage } from "./pages/AboutPage";
import { PlaceOrderPage } from "./pages/PlaceOrderPage";  // ✅ Import new page

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState("login");
  const [events, setEvents] = useState(initialEvents);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const showMessage = (msg, type = "info") => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleAuthSuccess = (user) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
    setCurrentView("home");
    showMessage(`Welcome, ${user.name}!`, "success");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCart([]);
    setCurrentView("login");
    showMessage("You have been logged out.", "info");
  };

  const handleAddToCart = (id) => {
    if (!isLoggedIn) {
      showMessage("Please log in to add events.", "error");
      setCurrentView("login");
      return;
    }
    if (cart.includes(id)) return showMessage("Already in cart!", "error");
    setCart([...cart, id]);
    showMessage("Added to cart!", "success");
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((i) => i !== id));
    showMessage("Removed from cart.", "info");
  };

  const handleAddEvent = (newEvent) => {
    setEvents([...events, { id: events.length + 1, ...newEvent }]);
    showMessage("New event added successfully!", "success");
    setCurrentView("home");
  };

  // ✅ Place Order Logic
  const handlePlaceOrder = () => {
    setCart([]);                        // empty cart after order
    setCurrentView("placeOrder");       // navigate to order page
    showMessage("🎉 Order placed successfully!", "success");
  };

  const renderView = () => {
    switch (currentView) {
      case "login":
      case "register":
        return (
          <AuthScreen
            view={currentView}
            onAuthSuccess={handleAuthSuccess}
            switchView={setCurrentView}
          />
        );
      case "home":
        return <HomePage events={events} onAddToCart={handleAddToCart} />;
      case "cart":
        return (
          <CartPage
            events={events}
            cart={cart}
            onRemove={handleRemoveFromCart}
            onPlaceOrder={handlePlaceOrder}    // ✅ Pass function here
          />
        );
      case "addEvent":
        return <AddEventPage onAddEvent={handleAddEvent} />;
      case "about":
        return <AboutPage />;
      case "placeOrder":
        return <PlaceOrderPage onBackHome={() => setCurrentView("home")} />;  // ✅ Final page
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <NavBar
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        cartCount={cart.length}
        navigate={setCurrentView}
        onLogout={handleLogout}
      />
      <div className="content">{renderView()}</div>
      {message && <MessageBox message={message} type={messageType} />}
    </div>
  );
}

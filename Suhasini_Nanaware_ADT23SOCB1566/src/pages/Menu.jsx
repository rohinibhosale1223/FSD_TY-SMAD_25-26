import React, { useState, useMemo } from "react";
import menuData from "../data/menuData";
import "./Menu.css";

export default function Menu() {
  const [cuisine, setCuisine] = useState("All");
  const [searchTerm, setSearchTerm] = useState(""); 
  const [message, setMessage] = useState("");

  const cuisines = useMemo(
    () => ["All", ...new Set(menuData.map(item => item.cuisine))],
    []
  );

  const filtered = menuData.filter(item => {
    const matchesCuisine = cuisine === "All" || item.cuisine === cuisine;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCuisine && matchesSearch;
  });

  function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem("restro_cart")) || [];
    const existingItem = cart.find(i => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("restro_cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    setMessage(`${item.name} added to cart 🛒`);
    setTimeout(() => setMessage(""), 2000);
  }

  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Delicious Menu</h1>

      {message && <div className="cart-message">{message}</div>}

      <div className="filter-container">
        <label htmlFor="cuisine">Filter by Cuisine:</label>
        <select
          id="cuisine"
          value={cuisine}
          onChange={e => setCuisine(e.target.value)}
        >
          {cuisines.map(c => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="menu-grid">
        {filtered.map(item => (
          <div className="menu-card" key={item.id}>
            <img src={item.img} alt={item.name} className="menu-img" />

            <div className="menu-info">
              <h3 className="dish-name">{item.name}</h3>
              <p className="dish-cuisine">{item.cuisine}</p>
              <p className="dish-desc">{item.desc}</p>
              <p className="dish-price">₹{item.price}</p>
              <button className="order-btn" onClick={() => addToCart(item)}>
                Add to Cart 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

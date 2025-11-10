import React, { useState } from "react";
import "./Profile.css";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("restro_user"));
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    favCuisine: "Japanese 🍣",
    memberSince: "2025",
  });

  function logout() {
    localStorage.removeItem("restro_user");
    window.location.href = "/login";
  }

  function handleEditChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function saveChanges() {
    localStorage.setItem("restro_user", JSON.stringify(userData));
    setEditMode(false);
    alert("Profile updated successfully!");
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        {user ? (
          <>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="User Avatar"
              className="profile-img"
            />

            {editMode ? (
              <div className="edit-form">
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleEditChange}
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleEditChange}
                  placeholder="Enter your email"
                />
                <input
                  type="text"
                  name="favCuisine"
                  value={userData.favCuisine}
                  onChange={handleEditChange}
                  placeholder="Favorite Cuisine"
                />
                <button onClick={saveChanges} className="save-btn">
                  Save Changes 💾
                </button>
              </div>
            ) : (
              <>
                <h2>{userData.name || "Guest User"}</h2>
                <p className="email">{userData.email}</p>

                <div className="profile-details">
                  <p><strong>Favorite Cuisine:</strong> {userData.favCuisine}</p>
                  <p><strong>Member Since:</strong> {userData.memberSince}</p>
                </div>

                <div className="profile-actions">
                  <button onClick={() => setEditMode(true)}>Edit ✏️</button>
                  <button onClick={logout}>Logout 🚪</button>
                </div>
              </>
            )}

            <div className="order-history">
              <h3>🍜 Recent Orders</h3>
              <ul>
                <li>Sushi Platter - ₹899</li>
                <li>Veg Ramen Bowl - ₹499</li>
                <li>Spicy Korean Bibimbap - ₹599</li>
              </ul>
            </div>

            <div className="preferences">
              <h3>💖 Preferences</h3>
              <p>You enjoy authentic Asian cuisines with vegetarian options.</p>
            </div>
          </>
        ) : (
          <div className="no-user">
            <h3>Please log in to view your profile.</h3>
            <a href="/login" className="login-btn">Login</a>
          </div>
        )}
      </div>
    </div>
  );
}

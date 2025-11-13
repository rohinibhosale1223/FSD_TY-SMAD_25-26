import React, { useState } from "react";
import "./ProfileForm.css";

export default function ProfileForm() {
  const stored = JSON.parse(localStorage.getItem("restro_user")) || {};
  const [form, setForm] = useState({
    name: stored.name || "",
    email: stored.email || "",
    phone: "",
    address: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert("✅ Profile updated successfully!");
    localStorage.setItem("restro_user", JSON.stringify(form));
  }

  return (
    <div className="profile-form">
      <h2 className="profile-title">My Profile</h2>

      <form onSubmit={handleSubmit} className="profile-fields">
        <label>Name</label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <label>Phone</label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="Enter your phone number"
        />

        <label>Address</label>
        <textarea
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          placeholder="Enter your address"
        />

        <button type="submit" className="btn-update">Update Profile</button>
      </form>
    </div>
  );
}

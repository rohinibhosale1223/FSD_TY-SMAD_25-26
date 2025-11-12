import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [msg, setMsg] = useState("");
  const nav = useNavigate();

  function submit(e) {
    e.preventDefault();

    if (form.password.length < 6) {
      setMsg("❌ Password must be at least 6 characters long.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMsg("❌ Passwords do not match.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      setMsg("❌ Please enter a valid 10-digit phone number.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    setMsg("✅ Registered successfully!");
    setTimeout(() => nav("/login"), 1500);
  }

  return (
    <div className="auth-page">
      <h2>Create Your Account ✨</h2>
      {msg && <div className="alert">{msg}</div>}

      <form onSubmit={submit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Choose a username"
          required
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your phone number"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Create a password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Re-enter your password"
          required
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        />

        <button type="submit" className="btn">
          Sign Up 🌸
        </button>
      </form>
    </div>
  );
}

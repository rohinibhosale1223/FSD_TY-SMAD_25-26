import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const nav = useNavigate();

  function submit(e) {
    e.preventDefault();
    if (form.password.length < 6) {
      setMsg("Password must be at least 6 characters long.");
      return;
    }
    localStorage.setItem("user", JSON.stringify(form));
    setMsg("✅ Registered successfully!");
    setTimeout(() => nav("/login"), 1200);
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
          placeholder="Enter your name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
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

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Create a password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit" className="btn">
          Sign Up 🌸
        </button>
      </form>
    </div>
  );
}

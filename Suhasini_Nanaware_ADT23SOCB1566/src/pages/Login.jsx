import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

export default function Login() {
  const [cred, setCred] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const nav = useNavigate();

  function submit(e) {
    e.preventDefault();
    if (!cred.email || cred.password.length < 6) {
      setErr("⚠️ Enter a valid email and password (min 6 characters).");
      return;
    }
    localStorage.setItem("restro_user", JSON.stringify({ email: cred.email }));
    nav("/");
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Log in to continue to Gourmet Delight</p>

        {err && <div className="alert-error">{err}</div>}

        <form className="login-form" onSubmit={submit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={cred.email}
              onChange={(e) => setCred({ ...cred, email: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={cred.password}
              onChange={(e) => setCred({ ...cred, password: e.target.value })}
              required
            />
          </div>

          <button className="btn-login" type="submit">
            Login
          </button>

          <p className="signup-text">
            Don’t have an account? <a href="/register">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

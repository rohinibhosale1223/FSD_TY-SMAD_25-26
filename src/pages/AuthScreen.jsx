import React, { useState } from "react";
import "./AuthScreen.css";

export const AuthScreen = ({ view, onAuthSuccess, switchView }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (view === "login") {
      if (username === "user@example.com" && password === "password")
        onAuthSuccess({ name: "User", email: username });
      else alert("Invalid credentials");
    } else {
      if (password !== confirm) return alert("Passwords do not match!");

      const name = fullName || username.split("@")[0]; // fallback if full name not provided

      onAuthSuccess({
        name,
        email: username,
        age,
        phone,
      });
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>{view === "login" ? "sign in" : "register"}</h2>
        <form onSubmit={handleSubmit}>

          {/* FULL NAME only in register */}
          {view === "register" && (
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          )}

          <input
            type="text"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* AGE + PHONE only in register */}
          {view === "register" && (
            <>
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="1"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </>
          )}

          {view === "register" && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          )}

          <button className="login-btn" type="submit">
            {view === "login" ? "LOGIN" : "REGISTER"}
          </button>
        </form>

        <p className="switch-text">
          {view === "login" ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => switchView("register")}>Register here</span>
            </>
          ) : (
            <>
              Already a member?{" "}
              <span onClick={() => switchView("login")}>Login here</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

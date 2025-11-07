import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      alert("No user found. Please register first!");
      navigate("/signup");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful!");
      navigate("/profile");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4 fw-bold text-success">🔐 Login</h2>

      <form className="w-50 mx-auto shadow p-4 rounded bg-light" onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="btn btn-success w-100 fw-bold">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

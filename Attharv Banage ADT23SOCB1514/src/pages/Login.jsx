import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setError("");
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

 
  const handleForgotPassword = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No registered user found. Please register first.");
      return;
    }

    if (storedUser.email !== email) {
      alert("Enter your registered email first.");
      return;
    }

    const newPass = prompt("Enter a new password:");

    if (newPass && newPass.trim().length >= 4) {
      storedUser.password = newPass;
      localStorage.setItem("user", JSON.stringify(storedUser));
      alert("✅ Password changed successfully!");
    } else {
      alert("Password reset cancelled or invalid.");
    }
  };

  return (
    <div className="container mt-5 pt-5 d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg bg-dark text-light" style={{ width: "380px" }}>
        <h3 className="text-center text-warning mb-3">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-warning w-100 fw-semibold">
            Login
          </button>

          {error && <p className="text-center text-danger mt-2">{error}</p>}
        </form>

        
        <button
          onClick={handleForgotPassword}
          className="btn btn-link text-warning text-center w-100 mt-2"
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  // Controlled component handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setMessage("Please enter both email and password.");
      return;
    }
    
    // Simple validation (can be expanded)
    if (!formData.email.includes('@')) {
        setMessage("Please enter a valid email address.");
        return;
    }

    // In a real application, you would call an authentication service here.
    console.log("Login Attempt:", formData);
    setMessage(`Login simulated for: ${formData.email}.`);
    // setFormData({ email: '', password: '' }); // Keep fields filled after simulated login
  };

  return (
    <div className="form-container">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        
        {message && (
            <p style={{ color: message.includes('simulated') ? 'green' : 'red', marginBottom: '15px', textAlign: 'center' }}>
                {message}
            </p>
        )}

        <label htmlFor="login-email">Email Address</label>
        <input 
          type="email" 
          id="login-email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="login-password">Password</label>
        <input 
          type="password" 
          id="login-password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />

        <button type="submit">Log In</button>
        
        <p className="form-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setMessage(''); // Clear message on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }
    
    // In a real application, you would call a user registration service here.
    console.log("Registration Successful for:", formData.email);
    setMessage("Registration successful! You can now log in.");
    setFormData({ name: '', email: '', password: '', confirmPassword: '' }); // Clear form on successful registration
  };

  return (
    <div className="form-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        
        {message && (
            <p style={{ color: message.includes('successful') ? 'green' : 'red', marginBottom: '15px', textAlign: 'center' }}>
                {message}
            </p>
        )}

        <label htmlFor="register-name">Full Name</label>
        <input 
          type="text" 
          id="register-name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="register-email">Email Address</label>
        <input 
          type="email" 
          id="register-email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="register-password">Password</label>
        <input 
          type="password" 
          id="register-password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input 
          type="password" 
          id="confirm-password" 
          name="confirmPassword" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          required 
        />

        <button type="submit">Register</button>

        <p className="form-link">
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
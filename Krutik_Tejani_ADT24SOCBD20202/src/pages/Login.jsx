import { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const Login = ({ setCurrentPage }) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    const success = login(formData.email, formData.password);
    
    if (success) {
      alert('Login successful! Welcome back!');
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="modern-auth-page">
      <div className="auth-background">
        <div className="auth-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="auth-content-wrapper">
        <div className="auth-left-section">
          <div className="auth-brand">
            <div className="brand-logo">🎮</div>
            <h2 className="brand-name">ToyKart</h2>
          </div>
          
          <div className="auth-illustration">
            <div className="illustration-content">
              <div className="floating-toy toy-1">🧸</div>
              <div className="floating-toy toy-2">🚗</div>
              <div className="floating-toy toy-3">🎨</div>
              <div className="floating-toy toy-4">🦄</div>
            </div>
            <h1 className="auth-welcome-title">Welcome Back!</h1>
            <p className="auth-welcome-text">
              Your favorite toys are waiting for you. Login to continue shopping and discover amazing deals!
            </p>
          </div>
        </div>

        <div className="auth-right-section">
          <div className="auth-form-container">
            <div className="form-header">
              <h2 className="form-title">Sign In</h2>
              <p className="form-subtitle">Enter your credentials to access your account</p>
            </div>

            <form className="modern-auth-form" onSubmit={handleSubmit}>
              <div className="modern-form-group">
                <label htmlFor="email">Email Address</label>
                <div className="modern-input-wrapper">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={errors.email ? 'error' : ''}
                  />
                </div>
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="modern-form-group">
                <label htmlFor="password">Password</label>
                <div className="modern-input-wrapper">
                  <FiLock className="input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={errors.password ? 'error' : ''}
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                {errors.password && <span className="error-text">{errors.password}</span>}
              </div>

              <div className="form-footer-options">
                <label className="remember-checkbox">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>

              <button type="submit" className="modern-submit-btn">
                Sign In
              </button>
            </form>

            <div className="auth-divider">
              <span>Or continue with</span>
            </div>

            <div className="social-auth-buttons">
              <button className="social-auth-btn google-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M19.8 10.2273C19.8 9.51821 19.7364 8.83639 19.6182 8.18185H10V12.0491H15.4818C15.2273 13.3 14.4636 14.3591 13.3182 15.0682V17.5773H16.7091C18.6091 15.8364 19.8 13.2727 19.8 10.2273Z" fill="#4285F4"/>
                  <path d="M10 20C12.7 20 14.9636 19.1045 16.7091 17.5773L13.3182 15.0682C12.3545 15.6682 11.1273 16.0227 10 16.0227C7.39545 16.0227 5.19091 14.2636 4.35909 11.9H0.859091V14.4909C2.59545 17.9591 6.00909 20 10 20Z" fill="#34A853"/>
                  <path d="M4.35909 11.9C4.14545 11.3 4.02273 10.6591 4.02273 10C4.02273 9.34091 4.14545 8.7 4.35909 8.1V5.50909H0.859091C0.313636 6.59091 0 7.75909 0 10C0 12.2409 0.313636 13.4091 0.859091 14.4909L4.35909 11.9Z" fill="#FBBC05"/>
                  <path d="M10 3.97727C11.2318 3.97727 12.3409 4.38636 13.2091 5.21364L16.2091 2.21364C14.9591 1.04545 12.6955 0 10 0C6.00909 0 2.59545 2.04091 0.859091 5.50909L4.35909 8.1C5.19091 5.73636 7.39545 3.97727 10 3.97727Z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button className="social-auth-btn facebook-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="#1877F2"/>
                </svg>
                Facebook
              </button>
            </div>

            <div className="auth-switch">
              <p>Don't have an account? 
                <button 
                  onClick={() => setCurrentPage('register')}
                  className="switch-link"
                >
                  Sign Up
                </button>
              </p>
            </div>

            <button 
              className="back-home-btn"
              onClick={() => setCurrentPage('home')}
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
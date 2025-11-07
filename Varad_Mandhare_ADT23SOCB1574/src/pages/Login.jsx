// src/pages/Login.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, BookOpen } from 'lucide-react';

const Login = ({ setIsAuthenticated, setUserName }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (isSignUp && !fullName) {
      alert('Please enter your full name');
      return;
    }

    // Demo credentials
    const name = isSignUp ? fullName : email.split('@')[0];
    setUserName(name);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userName', name);

    navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    // Demo Google login
    setUserName('Google User');
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userName', 'Google User');
    navigate('/dashboard');
  };

  return (
    <div
      className="login-container d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#F8F9FA' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="row shadow-lg rounded-4 overflow-hidden bg-white">
              {/* Left Side */}
              <div
                className="col-md-6 text-white p-5 d-flex flex-column justify-content-center"
                style={{
                  background: 'linear-gradient(135deg, #4B0082, #FFD700)',
                }}
              >
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="bg-white rounded p-2 me-2"
                      style={{ color: '#4B0082' }}
                    >
                      <BookOpen size={32} />
                    </div>
                    <span className="fw-bold fs-3">LearnScape</span>
                  </div>

                  <h2 className="display-6 fw-bold mb-3">
                    Welcome {isSignUp ? 'Aboard' : 'Back'}!
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                    {isSignUp
                      ? 'Create your account and start your learning journey today.'
                      : 'Sign in to continue your learning journey and track your progress.'}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="d-flex gap-4 mb-3">
                    <div>
                      <h4 className="fw-bold mb-0" style={{ color: '#FFD700' }}>
                        50K+
                      </h4>
                      <small>Active Learners</small>
                    </div>
                    <div>
                      <h4 className="fw-bold mb-0" style={{ color: '#FFD700' }}>
                        500+
                      </h4>
                      <small>Courses</small>
                    </div>
                    <div>
                      <h4 className="fw-bold mb-0" style={{ color: '#FFD700' }}>
                        4.9★
                      </h4>
                      <small>Rating</small>
                    </div>
                  </div>
                  <p className="small mb-0 opacity-75">
                    "LearnScape transformed my career. The structured learning paths are amazing!" – Sarah M.
                  </p>
                </div>
              </div>

              {/* Right Side - Login Form */}
              <div className="col-md-6 p-5">
                <div className="mb-4 text-center text-md-start">
                  <h3 className="fw-bold mb-2" style={{ color: '#4B0082' }}>
                    {isSignUp ? 'Create Account' : 'Sign In'}
                  </h3>
                  <p className="text-muted">
                    {isSignUp
                      ? 'Fill in your details to get started'
                      : 'Enter your credentials to access your account'}
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  {isSignUp && (
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Full Name</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">👤</span>
                        <input
                          type="text"
                          className="form-control border-start-0 ps-0"
                          placeholder="John Doe"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email Address</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <Mail size={18} />
                      </span>
                      <input
                        type="email"
                        className="form-control border-start-0 ps-0"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Password</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <Lock size={18} />
                      </span>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control border-start-0 border-end-0 ps-0"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        className="input-group-text bg-light border-start-0 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </span>
                    </div>
                  </div>

                  {!isSignUp && (
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberMe"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label
                          className="form-check-label small"
                          htmlFor="rememberMe"
                        >
                          Remember me
                        </label>
                      </div>
                      <a href="#" className="small" style={{ color: '#BA55D3' }}>
                        Forgot Password?
                      </a>
                    </div>
                  )}

                  {isSignUp && (
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms"
                        required
                      />
                      <label className="form-check-label small" htmlFor="terms">
                        I agree to the{" "}
                        <a href="#" className="text-decoration-none" style={{ color: '#BA55D3' }}>
                          Terms & Conditions
                        </a>
                      </label>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn w-100 mb-3 py-2 fw-semibold"
                    style={{
                      backgroundColor: '#4B0082',
                      color: 'white',
                      borderRadius: '25px',
                    }}
                  >
                    {isSignUp ? 'Create Account' : 'Sign In'}
                  </button>

                  <div className="text-center mb-3">
                    <span className="text-muted small">or continue with</span>
                  </div>

                  <button
                    type="button"
                    className="btn w-100 mb-3"
                    style={{
                      border: '2px solid #4B0082',
                      color: '#4B0082',
                      borderRadius: '25px',
                    }}
                    onClick={handleGoogleLogin}
                  >
                    <img
                      src="https://www.google.com/favicon.ico"
                      alt="Google"
                      width="18"
                      className="me-2"
                    />
                    Continue with Google
                  </button>

                  <div className="text-center">
                    <span className="text-muted small">
                      {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                    </span>
                    <button
                      type="button"
                      className="btn btn-link text-decoration-none small fw-semibold"
                      style={{ color: '#BA55D3' }}
                      onClick={() => setIsSignUp(!isSignUp)}
                    >
                      {isSignUp ? 'Sign In' : 'Sign Up'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

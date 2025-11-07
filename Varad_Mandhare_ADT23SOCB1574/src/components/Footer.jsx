// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary text-white rounded p-2 me-2">
                <BookOpen size={24} />
              </div>
              <span className="fw-bold fs-4">LearnScape</span>
            </div>
            <p className="text-white-50">
              Empowering learners worldwide with personalized learning paths and expert-curated content.
            </p>
            <div className="d-flex gap-2 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center" 
                 style={{width: '40px', height: '40px'}}>
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center" 
                 style={{width: '40px', height: '40px'}}>
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center" 
                 style={{width: '40px', height: '40px'}}>
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center" 
                 style={{width: '40px', height: '40px'}}>
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Company Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about" className="text-white-50 text-decoration-none">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Press
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <Link to="/courses" className="text-white-50 text-decoration-none">
                  All Courses
                </Link>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Guides
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  API Docs
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p className="text-white-50 mb-3">
              Subscribe to get the latest courses and updates.
            </p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Enter your email"
                aria-label="Email"
              />
              <button className="btn btn-primary" type="button">
                <Mail size={18} className="me-1" />
                Subscribe
              </button>
            </div>
            <small className="text-white-50">
              We respect your privacy. Unsubscribe at any time.
            </small>
          </div>
        </div>
        
        <hr className="my-4 bg-white opacity-25" />
        
        {/* Bottom Footer */}
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-white-50 mb-0">
              © 2025 LearnScape. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-white-50 text-decoration-none me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-white-50 text-decoration-none me-3">
              Terms of Service
            </a>
            <a href="#" className="text-white-50 text-decoration-none">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
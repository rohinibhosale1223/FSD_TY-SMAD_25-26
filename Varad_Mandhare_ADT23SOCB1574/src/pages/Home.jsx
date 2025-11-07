// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Video, Users, Award, Zap, Globe, TrendingUp, Star, ArrowRight
} from 'lucide-react';
import { coursesData } from '../data/coursesData';

const Home = () => {
  const featuredCourses = coursesData.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section py-5"
        style={{
          background: 'linear-gradient(135deg, #4B0082, #FFD700)',
          color: 'white',
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <span
                className="badge px-3 py-2 rounded-pill mb-3"
                style={{
                  backgroundColor: 'white',
                  color: '#4B0082',
                  fontWeight: '600',
                }}
              >
                🎓 #1 Learning Platform
              </span>
              <h1 className="display-3 fw-bold mb-4">
                Master Any Skill, <br />
                <span style={{ color: '#FFD700' }}>Your Way</span>
              </h1>
              <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Personalized learning roadmaps with curated videos, articles, and books from trusted sources.
                Learn at your own pace with expert guidance.
              </p>
              <div className="d-flex gap-3 flex-wrap mb-4">
                <Link
                  to="/courses"
                  className="btn btn-lg px-4 fw-bold"
                  style={{
                    backgroundColor: '#FFD700',
                    color: '#4B0082',
                    borderRadius: '30px',
                    border: 'none',
                  }}
                >
                  Explore Courses
                  <ArrowRight size={20} className="ms-2" />
                </Link>
                <Link
                  to="/about"
                  className="btn btn-outline-light btn-lg px-4"
                  style={{ borderRadius: '30px' }}
                >
                  Learn More
                </Link>
              </div>

              {/* Stats */}
              <div className="d-flex gap-4 mt-4 flex-wrap">
                <div>
                  <h3 className="fw-bold mb-0" style={{ color: '#FFD700' }}>50K+</h3>
                  <p className="mb-0 small">Active Learners</p>
                </div>
                <div>
                  <h3 className="fw-bold mb-0" style={{ color: '#FFD700' }}>500+</h3>
                  <p className="mb-0 small">Expert Courses</p>
                </div>
                <div>
                  <h3 className="fw-bold mb-0" style={{ color: '#FFD700' }}>4.9★</h3>
                  <p className="mb-0 small">Average Rating</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="https://picsum.photos/seed/hero/600/500"
                alt="Learning"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#4B0082' }}>
              Why Choose LearnScape?
            </h2>
            <p className="lead text-muted">
              Everything you need to achieve your learning goals
            </p>
          </div>

          <div className="row g-4">
            {[
              { icon: <BookOpen size={32} color="#FFD700" />, title: 'Curated Content', desc: 'Hand-picked resources from top instructors and trusted platforms.' },
              { icon: <TrendingUp size={32} color="#BA55D3" />, title: 'Track Progress', desc: 'Monitor your learning journey with detailed progress tracking.' },
              { icon: <Zap size={32} color="#FFD700" />, title: 'Learn at Your Pace', desc: 'Flexible schedules that fit your lifestyle.' },
              { icon: <Users size={32} color="#BA55D3" />, title: 'Expert Instructors', desc: 'Learn from industry professionals with real-world experience.' },
              { icon: <Award size={32} color="#FFD700" />, title: 'Certificates', desc: 'Get recognized certificates to boost your career prospects.' },
              { icon: <Globe size={32} color="#BA55D3" />, title: 'Global Community', desc: 'Connect with learners worldwide and grow together.' },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="card border-0 shadow-sm h-100 text-center"
                  style={{
                    borderRadius: '12px',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer',
                    borderTop: `4px solid ${index % 2 === 0 ? '#FFD700' : '#BA55D3'}`,
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div className="card-body p-4">
                    <div className="mb-3">{feature.icon}</div>
                    <h4 className="fw-bold mb-3" style={{ color: '#4B0082' }}>
                      {feature.title}
                    </h4>
                    <p className="text-muted">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div>
              <h2 className="display-5 fw-bold mb-2" style={{ color: '#4B0082' }}>
                Featured Courses
              </h2>
              <p className="text-muted">
                Start your learning journey with our most popular courses
              </p>
            </div>
            <Link
              to="/courses"
              className="btn btn-outline"
              style={{
                color: '#4B0082',
                border: '2px solid #4B0082',
                fontWeight: '600',
              }}
            >
              View All Courses
              <ArrowRight size={18} className="ms-2" />
            </Link>
          </div>

          <div className="row g-4">
            {featuredCourses.map((course) => (
              <div key={course.id} className="col-md-4">
                <div
                  className="card shadow-sm h-100 border-0"
                  style={{
                    borderRadius: '16px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <img
                    src={course.image}
                    className="card-img-top"
                    alt={course.title}
                    style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span
                        className="badge"
                        style={{
                          backgroundColor: '#EDE7F6',
                          color: '#4B0082',
                        }}
                      >
                        {course.category}
                      </span>
                      <span className="fw-bold" style={{ color: '#FFD700' }}>
                        <Star size={16} fill="currentColor" /> {course.rating}
                      </span>
                    </div>
                    <h5 className="card-title fw-bold mb-2" style={{ color: '#4B0082' }}>
                      {course.title}
                    </h5>
                    <p className="card-text text-muted small mb-3">
                      {course.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center text-muted small mb-3">
                      <span>👤 {course.instructor}</span>
                      <span>⏱️ {course.duration}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="badge bg-light text-dark me-1">{course.level}</span>
                        <span className="text-muted small">
                          {course.students.toLocaleString()} students
                        </span>
                      </div>
                      <span className="fw-bold fs-5" style={{ color: '#4B0082' }}>
                        Free
                      </span>
                    </div>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <Link
                      to="/courses"
                      className="btn w-100 fw-bold"
                      style={{
                        backgroundColor: '#4B0082',
                        color: 'white',
                        borderRadius: '25px',
                      }}
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-5 text-white text-center"
        style={{
          background: 'linear-gradient(135deg, #4B0082, #FFD700)',
        }}
      >
        <div className="container py-5">
          <h2 className="display-4 fw-bold mb-4">Ready to Start Learning?</h2>
          <p className="lead mb-4">Join thousands of learners achieving their goals every day</p>
          <Link
            to="/login"
            className="btn btn-lg px-5 fw-bold"
            style={{
              backgroundColor: '#FFD700',
              color: '#4B0082',
              borderRadius: '30px',
            }}
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

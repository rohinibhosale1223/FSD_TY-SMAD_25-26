// src/pages/About.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Award, Heart, Zap, Shield } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://picsum.photos/seed/sarah/300/300',
      bio: 'Former educator with 15+ years experience'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://picsum.photos/seed/michael/300/300',
      bio: 'Tech innovator passionate about EdTech'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Content',
      image: 'https://picsum.photos/seed/emily/300/300',
      bio: 'Curriculum designer & learning strategist'
    },
    {
      name: 'David Kim',
      role: 'Head of Marketing',
      image: 'https://picsum.photos/seed/david/300/300',
      bio: 'Growth expert helping learners worldwide'
    }
  ];

  const values = [
    {
      icon: <Target size={32} color="#FFD700" />,
      title: 'Mission-Driven',
      description: 'Democratizing education and making quality learning accessible to everyone, everywhere.'
    },
    {
      icon: <Users size={32} color="#BA55D3" />,
      title: 'Community First',
      description: 'Building a supportive global community where learners help each other grow.'
    },
    {
      icon: <Award size={32} color="#FFD700" />,
      title: 'Excellence',
      description: 'Curating only the highest quality content from verified experts and institutions.'
    },
    {
      icon: <Heart size={32} color="#BA55D3" />,
      title: 'Passion for Learning',
      description: 'We believe continuous learning is the key to personal and professional growth.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Active Learners' },
    { number: '500+', label: 'Expert Courses' },
    { number: '150+', label: 'Countries' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="py-5 text-white"
        style={{
          background: 'linear-gradient(135deg, #4B0082, #FFD700)',
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-3 fw-bold mb-4">Empowering Learners Worldwide</h1>
              <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
                LearnScape was founded with a simple mission: to make quality education accessible
                to anyone, anywhere, at any time. We believe that learning is a lifelong journey,
                and we're here to guide you every step of the way.
              </p>
              <div className="d-flex gap-3">
                <Link
                  to="/login"
                  className="btn btn-lg px-4 fw-bold"
                  style={{ backgroundColor: '#FFD700', color: '#4B0082', borderRadius: '30px' }}
                >
                  Join Us
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-outline-light btn-lg px-4"
                  style={{ borderRadius: '30px' }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://picsum.photos/seed/about/600/500"
                alt="About Us"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3 col-sm-6">
                <div className="text-center">
                  <h2 className="display-4 fw-bold" style={{ color: '#4B0082' }}>
                    {stat.number}
                  </h2>
                  <p className="text-muted fw-semibold mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="https://picsum.photos/seed/story/600/400"
                alt="Our Story"
                className="img-fluid rounded-4 shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4" style={{ color: '#4B0082' }}>
                Our Story
              </h2>
              <p className="text-muted mb-3">
                LearnScape began in 2020 when our founder, Sarah Johnson, noticed a gap in the online
                learning landscape. While there were many courses available, learners struggled to
                find structured, personalized learning paths that matched their goals.
              </p>
              <p className="text-muted mb-3">
                We built LearnScape to solve this problem by creating a platform that not only offers
                high-quality courses but also provides personalized learning roadmaps, progress
                tracking, and a supportive community.
              </p>
              <p className="text-muted mb-4">
                Today, we're proud to serve over 50,000 learners across 150+ countries, helping them
                achieve their personal and professional goals through continuous learning.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <div className="d-flex align-items-center">
                  <div
                    className="rounded p-2 me-3"
                    style={{ backgroundColor: '#EDE7F6', color: '#4B0082' }}
                  >
                    <Shield size={24} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0" style={{ color: '#4B0082' }}>
                      Trusted Platform
                    </h6>
                    <small className="text-muted">Verified courses only</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    className="rounded p-2 me-3"
                    style={{ backgroundColor: '#FFF5E1', color: '#BA55D3' }}
                  >
                    <Zap size={24} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0" style={{ color: '#4B0082' }}>
                      Fast Learning
                    </h6>
                    <small className="text-muted">Learn at your pace</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#4B0082' }}>
              Our Values
            </h2>
            <p className="lead text-muted">The principles that guide everything we do</p>
          </div>
          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div
                  className="card border-0 shadow-sm h-100 text-center hover-lift"
                  style={{
                    borderTop: `4px solid ${index % 2 === 0 ? '#FFD700' : '#BA55D3'}`,
                  }}
                >
                  <div className="card-body p-4">
                    <div className="mb-3">{value.icon}</div>
                    <h5 className="fw-bold mb-3" style={{ color: '#4B0082' }}>
                      {value.title}
                    </h5>
                    <p className="text-muted small mb-0">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#4B0082' }}>
              Meet Our Team
            </h2>
            <p className="lead text-muted">
              Passionate educators and innovators dedicated to your success
            </p>
          </div>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm h-100 hover-lift">
                  <img
                    src={member.image}
                    className="card-img-top"
                    alt={member.name}
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center">
                    <h5 className="fw-bold mb-1" style={{ color: '#4B0082' }}>
                      {member.name}
                    </h5>
                    <p className="text-primary mb-2 small fw-semibold">{member.role}</p>
                    <p className="text-muted small mb-3">{member.bio}</p>
                    <div className="d-flex justify-content-center gap-2">
                      <a
                        href="#"
                        className="btn btn-sm rounded-circle"
                        style={{
                          width: '36px',
                          height: '36px',
                          padding: '8px',
                          backgroundColor: '#EDE7F6',
                          color: '#4B0082',
                        }}
                      >
                        in
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm rounded-circle"
                        style={{
                          width: '36px',
                          height: '36px',
                          padding: '8px',
                          backgroundColor: '#FFF5E1',
                          color: '#BA55D3',
                        }}
                      >
                        🐦
                      </a>
                    </div>
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
          <h2 className="display-4 fw-bold mb-4">Join Our Learning Community</h2>
          <p className="lead mb-4">Start your learning journey today and join thousands of learners achieving their goals</p>
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

export default About;

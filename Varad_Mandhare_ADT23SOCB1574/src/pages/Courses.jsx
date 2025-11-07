// src/pages/Courses.jsx

import React, { useState } from 'react';
import { Search, Filter, Star, Clock, Users, BookOpen } from 'lucide-react';
import { coursesData } from '../data/coursesData';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['all', 'Technology', 'Business', 'Creative'];
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  // Filter courses
  const filteredCourses = coursesData.filter(course => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Sort courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.students - a.students;
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f9f9fb' }}>
      {/* Header */}
      <section
        className="text-white py-5"
        style={{
          background: 'linear-gradient(135deg, #4B0082, #FFD700)',
        }}
      >
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Explore Our Courses</h1>
              <p className="lead mb-0">
                Discover {coursesData.length}+ expertly crafted courses to master new skills and
                advance your career.
              </p>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div
                className="text-center p-4 rounded-4 shadow-lg"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <h3 className="fw-bold mb-1" style={{ color: '#FFD700' }}>
                  50,000+
                </h3>
                <p className="mb-0">Students Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-lg-3 mb-4">
            <div
              className="card border-0 shadow-sm sticky-top"
              style={{
                top: '100px',
                borderTop: '4px solid #4B0082',
                borderRadius: '12px',
              }}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="fw-bold mb-0" style={{ color: '#4B0082' }}>
                    <Filter size={20} className="me-2" />
                    Filters
                  </h5>
                  <button
                    className="btn btn-sm text-decoration-none fw-semibold"
                    style={{ color: '#BA55D3' }}
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedLevel('all');
                      setSearchTerm('');
                    }}
                  >
                    Clear
                  </button>
                </div>

                {/* Search */}
                <div className="mb-4">
                  <label className="form-label fw-semibold small">Search</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <Search size={18} />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0"
                      placeholder="Search courses..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-4">
                  <label className="form-label fw-semibold small">Category</label>
                  <div className="d-flex flex-column gap-2">
                    {categories.map((category) => (
                      <div key={category} className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="category"
                          id={`cat-${category}`}
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                        />
                        <label className="form-check-label" htmlFor={`cat-${category}`}>
                          {category === 'all' ? 'All Categories' : category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Level Filter */}
                <div className="mb-4">
                  <label className="form-label fw-semibold small">Level</label>
                  <div className="d-flex flex-column gap-2">
                    {levels.map((level) => (
                      <div key={level} className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="level"
                          id={`level-${level}`}
                          checked={selectedLevel === level}
                          onChange={() => setSelectedLevel(level)}
                        />
                        <label className="form-check-label" htmlFor={`level-${level}`}>
                          {level === 'all' ? 'All Levels' : level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-3">
                  <label className="form-label fw-semibold small">Minimum Rating</label>
                  <div className="d-flex flex-column gap-2">
                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                      <div key={rating} className="form-check">
                        <input className="form-check-input" type="radio" name="rating" id={`rating-${rating}`} />
                        <label
                          className="form-check-label d-flex align-items-center"
                          htmlFor={`rating-${rating}`}
                        >
                          <Star size={14} fill="#FFD700" className="me-1" />
                          {rating} & up
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="col-lg-9">
            {/* Sort Bar */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h5 className="fw-bold mb-1" style={{ color: '#4B0082' }}>
                  {sortedCourses.length} {sortedCourses.length === 1 ? 'Course' : 'Courses'} Found
                </h5>
                <p className="text-muted small mb-0">
                  {searchTerm && `Showing results for "${searchTerm}"`}
                </p>
              </div>
              <select
                className="form-select w-auto"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Courses */}
            {sortedCourses.length > 0 ? (
              <div className="row g-4">
                {sortedCourses.map((course) => (
                  <div key={course.id} className="col-md-6 col-xl-4">
                    <div className="card shadow-sm h-100 border-0 rounded-4">
                      <div className="position-relative">
                        <img
                          src={course.image}
                          className="card-img-top rounded-top-4"
                          alt={course.title}
                        />
                        <span
                          className="position-absolute top-0 end-0 m-3 badge"
                          style={{
                            backgroundColor: '#FFD700',
                            color: '#4B0082',
                            fontWeight: '600',
                          }}
                        >
                          ₹{course.price}
                        </span>
                      </div>
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
                          <div className="d-flex align-items-center">
                            <Star size={14} fill="#FFD700" className="me-1" />
                            <span className="fw-bold small">{course.rating}</span>
                          </div>
                        </div>
                        <h5 className="fw-bold mb-2" style={{ color: '#4B0082' }}>
                          {course.title}
                        </h5>
                        <p className="text-muted small mb-3">{course.description}</p>

                        <div className="d-flex align-items-center text-muted small mb-2">
                          <Users size={14} className="me-1" />
                          <span className="me-3">{course.students.toLocaleString()}</span>
                          <Clock size={14} className="me-1" />
                          <span className="me-3">{course.duration}</span>
                          <BookOpen size={14} className="me-1" />
                          <span>{course.resources}</span>
                        </div>

                        <div className="text-muted small mb-3">👤 {course.instructor}</div>

                        <span className="badge bg-light text-dark">{course.level}</span>
                      </div>
                      <div className="card-footer bg-white border-0">
                        <button
                          className="btn w-100 fw-bold"
                          style={{
                            backgroundColor: '#4B0082',
                            color: 'white',
                            borderRadius: '25px',
                          }}
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <BookOpen size={64} className="text-muted mb-3" />
                <h4 className="fw-bold mb-2">No courses found</h4>
                <p className="text-muted">Try adjusting your filters or search terms</p>
                <button
                  className="btn fw-bold"
                  style={{
                    backgroundColor: '#4B0082',
                    color: 'white',
                    borderRadius: '25px',
                  }}
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedLevel('all');
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

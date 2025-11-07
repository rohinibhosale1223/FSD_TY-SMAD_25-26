// src/pages/Dashboard.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, TrendingUp, Target, Calendar, Play, Star, Filter } from 'lucide-react';
import { coursesData, myJourneyData, userStats } from '../data/coursesData';

const Dashboard = ({ userName }) => {
  const [enrolledCourses, setEnrolledCourses] = useState(myJourneyData);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Technology', 'Business', 'Creative'];
  
  const availableCourses = coursesData.filter(
    course => !enrolledCourses.find(enrolled => enrolled.courseId === course.id)
  );

  const handleEnrollCourse = (course) => {
    const newEnrollment = {
      id: enrolledCourses.length + 1,
      courseId: course.id,
      title: course.title,
      progress: 0,
      completedLessons: 0,
      totalLessons: course.resources,
      lastAccessed: 'Just now',
      nextLesson: `${course.title} - Introduction`,
      image: course.image,
      timeSpent: '0 hours',
      category: course.category
    };
    
    setEnrolledCourses([...enrolledCourses, newEnrollment]);
  };

  const filteredAvailableCourses = selectedCategory === 'all' 
    ? availableCourses 
    : availableCourses.filter(course => course.category === selectedCategory);

  return (
    <div className="container my-5">
      {/* Welcome Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div 
            className="rounded-4 p-4 p-md-5 shadow-sm"
            style={{ background: "linear-gradient(135deg, #4B0082, #FFD700)", color: "white" }}
          >
            <div className="row align-items-center">
              <div className="col-md-8">
                <h2 className="display-6 fw-bold mb-2">Welcome back, {userName || 'Learner'}! 👋</h2>
                <p className="mb-0 opacity-75">
                  You're making great progress. Keep up the momentum and achieve your learning goals!
                </p>
              </div>
              <div className="col-md-4 text-md-end mt-3 mt-md-0">
                <Link 
                  to="/my-journey" 
                  className="btn btn-lg fw-semibold"
                  style={{ backgroundColor: "#FFD700", color: "#4B0082", borderRadius: "30px" }}
                >
                  Continue Learning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-5">
        {[
          { icon: <BookOpen />, title: "Enrolled Courses", value: enrolledCourses.length, color: "#4B0082" },
          { icon: <Award />, title: "Certificates", value: userStats.certificates, color: "#FFD700" },
          { icon: <Clock />, title: "Learning Time", value: `${userStats.totalHours}h`, color: "#BA55D3" },
          { icon: <Target />, title: "Streak", value: `${userStats.streak} days 🔥`, color: "#E74C3C" }
        ].map((stat, idx) => (
          <div className="col-md-3 col-sm-6" key={idx}>
            <div 
              className="shadow-sm rounded-4 p-4 h-100"
              style={{ borderLeft: `5px solid ${stat.color}`, backgroundColor: "white" }}
            >
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div style={{ color: stat.color }}>{stat.icon}</div>
                <span className="text-muted small">{stat.title}</span>
              </div>
              <h3 className="fw-bold mb-0" style={{ color: stat.color }}>
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Enrolled Courses */}
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h3 className="fw-bold mb-1" style={{ color: "#4B0082" }}>My Learning Goals</h3>
            <p className="text-muted mb-0">Continue where you left off</p>
          </div>
          <Link 
            to="/my-journey" 
            className="btn btn-outline"
            style={{ color: "#4B0082", borderColor: "#4B0082" }}
          >
            View All
          </Link>
        </div>

        {enrolledCourses.length > 0 ? (
          <div className="row g-4">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="col-md-6 col-lg-4">
                <div className="card shadow-sm border-0 h-100">
                  <div className="position-relative">
                    <img 
                      src={course.image} 
                      className="card-img-top" 
                      alt={course.title}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                    <div 
                      className="position-absolute top-0 end-0 m-3 badge" 
                      style={{ backgroundColor: "#FFD700", color: "#4B0082" }}
                    >
                      {course.progress}% Complete
                    </div>
                  </div>
                  <div className="card-body">
                    <span 
                      className="badge mb-2" 
                      style={{ backgroundColor: "#EDE7F6", color: "#4B0082" }}
                    >
                      {course.category}
                    </span>
                    <h5 className="fw-bold" style={{ color: "#4B0082" }}>{course.title}</h5>
                    <div className="progress mb-2" style={{ height: "8px" }}>
                      <div 
                        className="progress-bar" 
                        style={{ width: `${course.progress}%`, backgroundColor: "#FFD700" }}
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between text-muted small mb-3">
                      <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                      <span>{course.timeSpent}</span>
                    </div>
                    <div className="d-flex gap-2">
                      <Link 
                        to="/my-journey"
                        className="btn flex-grow-1"
                        style={{ backgroundColor: "#4B0082", color: "white", borderRadius: "30px" }}
                      >
                        <Play size={16} className="me-1" /> Continue
                      </Link>
                      <button className="btn btn-outline-secondary">
                        <Calendar size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="card-footer bg-light border-0">
                    <small className="text-muted">Last accessed: {course.lastAccessed}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div 
            className="text-center py-5 rounded-4"
            style={{ backgroundColor: "#F9F9FF" }}
          >
            <BookOpen size={48} className="text-muted mb-3" />
            <h5 className="fw-bold mb-2" style={{ color: "#4B0082" }}>No courses enrolled yet</h5>
            <p className="text-muted mb-3">Start your learning journey by enrolling in a course below</p>
          </div>
        )}
      </div>

      {/* Available Courses */}
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h3 className="fw-bold mb-1" style={{ color: "#4B0082" }}>Discover More Courses</h3>
            <p className="text-muted mb-0">Expand your skills with these courses</p>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <Filter size={18} className="text-muted" />
            <select 
              className="form-select form-select-sm" 
              style={{ width: 'auto', color: "#4B0082", borderColor: "#4B0082" }}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row g-4">
          {filteredAvailableCourses.slice(0, 6).map((course) => (
            <div key={course.id} className="col-md-6 col-lg-4">
              <div className="card shadow-sm border-0 h-100">
                <img 
                  src={course.image} 
                  className="card-img-top" 
                  alt={course.title}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span 
                      className="badge" 
                      style={{ backgroundColor: "#EDE7F6", color: "#4B0082" }}
                    >
                      {course.category}
                    </span>
                    <span className="fw-bold" style={{ color: "#FFD700" }}>
                      <Star size={14} fill="currentColor" /> {course.rating}
                    </span>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#4B0082" }}>{course.title}</h5>
                  <p className="text-muted small mb-3">{course.description.substring(0, 80)}...</p>
                  <div className="d-flex justify-content-between align-items-center text-muted small mb-3">
                    <span>👤 {course.instructor}</span>
                    <span>⏱️ {course.duration}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-light text-dark">{course.level}</span>
                    <span className="fw-bold" style={{ color: "#4B0082" }}>${course.price}</span>
                  </div>
                </div>
                <div className="card-footer bg-white border-0">
                  <button 
                    className="btn w-100"
                    style={{ borderColor: "#4B0082", color: "#4B0082" }}
                    onClick={() => handleEnrollCourse(course)}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link 
            to="/courses" 
            className="btn btn-lg fw-bold"
            style={{ backgroundColor: "#4B0082", color: "white", borderRadius: "30px" }}
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// src/pages/MyJourney.jsx

import React from 'react';
import { BookOpen, Award, Edit3, TrendingUp, Calendar, Zap, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MyJourney = ({ userName, enrolledCourses }) => {
  // Simulated user stats and extra data
  const userStats = {
    email: "learner@example.com",
    avatar: `https://ui-avatars.com/api/?name=${userName}&background=4B0082&color=fff`,
    achievements: [
      { icon: <Award size={32} color="#FFD700" />, title: "Completed HTML Course" },
      { icon: <Award size={32} color="#FFD700" />, title: "7-Day Streak 🔥" },
    ],
    upcomingSchedule: [
      { course: "JavaScript Basics", nextLesson: "Functions in JS", due: "Tomorrow" },
      { course: "Python for Beginners", nextLesson: "Working with Variables", due: "In 2 Days" },
    ],
    recommendedCourses: [
      { title: "React for Beginners", rating: 4.8, badge: "Frontend" },
      { title: "Advanced CSS & Flexbox", rating: 4.6, badge: "Design" },
    ],
  };

  return (
    <div className="container py-5">
      {/* Profile Card */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 p-4 rounded-4">
            <div className="d-flex align-items-center">
              <img
                src={userStats.avatar}
                alt="Profile Avatar"
                className="rounded-circle me-4"
                style={{ width: "90px", height: "90px" }}
              />
              <div>
                <h3 className="fw-bold mb-1" style={{ color: '#4B0082' }}>{userName || 'Learner'}</h3>
                <p className="text-muted mb-0">{userStats.email}</p>
              </div>
              <div className="ms-auto">
                <button
                  className="btn btn-sm"
                  style={{ color: '#4B0082', borderRadius: '25px', border: '1px solid #4B0082' }}
                >
                  <Edit3 size={20} className="me-1" /> Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrolled Courses */}
      <div className="mb-5">
        <h4 className="fw-bold mb-4" style={{ color: '#4B0082' }}>
          <BookOpen size={24} className="me-2" /> My Learning Progress
        </h4>
        <div className="row">
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course) => (
              <div key={course.id} className="col-md-4 mb-4">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body">
                    <h5 className="fw-bold mb-2" style={{ color: '#4B0082' }}>{course.title}</h5>
                    <div className="progress mb-2" style={{ height: '10px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${course.progress}%`,
                          backgroundColor: '#FFD700',
                        }}
                      ></div>
                    </div>
                    <small className="text-muted">{course.progress}% completed</small>
                  </div>
                  <div className="card-footer bg-light border-0">
                    <Link
                      to={`/course/${course.courseId}`} // ✅ Working continue button
                      className="btn btn-sm w-100 fw-semibold"
                      style={{ backgroundColor: '#4B0082', color: 'white', borderRadius: '25px' }}
                    >
                      Continue Learning
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4">
              <p className="text-muted">You haven’t enrolled in any courses yet.</p>
              <Link
                to="/courses"
                className="btn fw-bold px-4"
                style={{
                  backgroundColor: "#4B0082",
                  color: "white",
                  borderRadius: "25px",
                }}
              >
                Browse Courses
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-5">
        <h4 className="fw-bold mb-4" style={{ color: '#4B0082' }}>
          <Award size={24} className="me-2" /> Achievements
        </h4>
        <div className="row">
          {userStats.achievements.map((achievement, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm text-center p-4 h-100">
                <div className="mb-3">{achievement.icon}</div>
                <h6 className="fw-bold" style={{ color: '#4B0082' }}>{achievement.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Lessons */}
      <div className="mb-5">
        <h4 className="fw-bold mb-4" style={{ color: '#4B0082' }}>
          <Calendar size={24} className="me-2" /> Upcoming Schedule
        </h4>
        {userStats.upcomingSchedule.map((item, index) => (
          <div key={index} className="d-flex align-items-center mb-3 p-3 bg-light rounded-4">
            <Zap size={24} className="me-3 text-warning" />
            <div>
              <strong>{item.course}</strong> – {item.nextLesson}
              <div className="text-muted small">{item.due}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Courses */}
      <div className="mb-5">
        <h4 className="fw-bold mb-4" style={{ color: '#4B0082' }}>
          <TrendingUp size={24} className="me-2" /> Recommended For You
        </h4>
        <div className="row">
          {userStats.recommendedCourses.map((course, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card border-0 shadow-sm p-4 h-100">
                <h5 className="fw-bold" style={{ color: '#4B0082' }}>{course.title}</h5>
                <div className="d-flex align-items-center">
                  <Star size={16} fill="#FFD700" className="me-1" />
                  <span className="fw-bold small text-muted">{course.rating}</span>
                </div>
                <span
                  className="badge mt-2"
                  style={{ backgroundColor: '#EDE7F6', color: '#4B0082' }}
                >
                  {course.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More Features */}
      <div className="text-center">
        <Link
          to="/courses"
          className="btn btn-lg px-4 fw-bold"
          style={{
            backgroundColor: '#4B0082',
            color: '#FFD700',
            borderRadius: '30px',
          }}
        >
          Explore More Courses <ArrowRight size={20} className="ms-2" />
        </Link>
      </div>
    </div>
  );
};

export default MyJourney;

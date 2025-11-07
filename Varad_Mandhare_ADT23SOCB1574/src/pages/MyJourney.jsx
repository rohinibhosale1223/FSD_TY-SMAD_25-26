import React from 'react';
import { BookOpen, Award, User, Edit3 } from 'lucide-react';

const MyJourney = ({ userName }) => {
  // Simulated user data
  const userData = {
    name: userName || "Learner",
    email: "learner@example.com",
    avatar: `https://ui-avatars.com/api/?name=${userName}&background=4B0082&color=fff`,
    enrolledCourses: [
      { title: "JavaScript Basics", progress: 70, badge: "Frontend" },
      { title: "Responsive Web Design", progress: 45, badge: "Design" },
      { title: "Python for Beginners", progress: 90, badge: "Backend" }
    ],
    achievements: [
      { icon: <Award size={32} color="#FFD700" />, title: "Completed HTML Course" },
      { icon: <Award size={32} color="#FFD700" />, title: "5 Days Learning Streak" }
    ]
  };

  return (
    <div className="container py-5">
      {/* Profile Card */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 p-4 rounded-4">
            <div className="d-flex align-items-center">
              <img
                src={userData.avatar}
                alt="Profile Avatar"
                className="rounded-circle me-4"
                style={{ width: "80px", height: "80px" }}
              />
              <div>
                <h3 className="fw-bold mb-1" style={{ color: '#4B0082' }}>{userData.name}</h3>
                <p className="text-muted mb-0">{userData.email}</p>
              </div>
              <div className="ms-auto">
                <button className="btn btn-sm" style={{ color: '#4B0082' }}>
                  <Edit3 size={20} className="me-1" /> Edit
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
          {userData.enrolledCourses.map((course, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <span className="badge mb-2" style={{ backgroundColor: '#EDE7F6', color: '#4B0082' }}>
                    {course.badge}
                  </span>
                  <h5 className="fw-bold mb-3" style={{ color: '#4B0082' }}>{course.title}</h5>
                  <div className="progress" style={{ height: '10px' }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${course.progress}%`, backgroundColor: '#FFD700' }}
                      aria-valuenow={course.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small className="text-muted">{course.progress}% completed</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-5">
        <h4 className="fw-bold mb-4" style={{ color: '#4B0082' }}>
          <Award size={24} className="me-2" /> Achievements
        </h4>
        <div className="row">
          {userData.achievements.map((achievement, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm text-center p-4 h-100">
                <div className="mb-3">{achievement.icon}</div>
                <h6 className="fw-bold" style={{ color: '#4B0082' }}>{achievement.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More features */}
      <div className="text-center">
        <button
          className="btn btn-lg px-4 fw-bold"
          style={{
            backgroundColor: '#4B0082',
            color: '#FFD700',
            borderRadius: '30px',
          }}
        >
          Explore More Courses
        </button>
      </div>
    </div>
  );
};

export default MyJourney;

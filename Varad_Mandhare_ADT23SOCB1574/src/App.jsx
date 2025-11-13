// src/App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import MyJourney from './pages/MyJourney';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Notifications from './pages/Notifications';
import CourseDetail from './pages/CourseDetail'; // ✅ Course Detail Page

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [enrolledCourses, setEnrolledCourses] = useState([]); // ✅ Shared enrolled courses state

  // Check if the user is already logged in (from localStorage)
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const storedName = localStorage.getItem('userName');

    if (authStatus === 'true') {
      setIsAuthenticated(true);
      setUserName(storedName || 'User');
    }

    // ✅ Restore enrolled courses from localStorage
    const savedCourses = JSON.parse(localStorage.getItem('enrolledCourses'));
    if (savedCourses) setEnrolledCourses(savedCourses);
  }, []);

  // ✅ Persist enrolledCourses in localStorage when updated
  useEffect(() => {
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          userName={userName}
        />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Courses: pass enrolledCourses state */}
            <Route
              path="/courses"
              element={
                <Courses
                  enrolledCourses={enrolledCourses}
                  setEnrolledCourses={setEnrolledCourses}
                />
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notifications" element={<Notifications />} />

            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/my-journey" replace />
                ) : (
                  <Login
                    setIsAuthenticated={setIsAuthenticated}
                    setUserName={setUserName}
                  />
                )
              }
            />

            {/* My Journey: protected view */}
            <Route
              path="/my-journey"
              element={
                <ProtectedRoute>
                  <MyJourney
                    userName={userName}
                    enrolledCourses={enrolledCourses}
                  />
                </ProtectedRoute>
              }
            />

            {/* ✅ Course Detail Page */}
            <Route
              path="/course/:courseId"
              element={
                <ProtectedRoute>
                  <CourseDetail />
                </ProtectedRoute>
              }
            />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

// 404 Not Found Component
const NotFound = () => (
  <div className="container text-center py-5 my-5">
    <h1 className="display-1 fw-bold" style={{ color: '#4B0082' }}>404</h1>
    <h2 className="mb-4">Page Not Found</h2>
    <p className="text-muted mb-4">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <a
      href="/"
      className="btn btn-primary"
      style={{ backgroundColor: '#4B0082', borderColor: '#4B0082' }}
    >
      Go Back Home
    </a>
  </div>
);

export default App;

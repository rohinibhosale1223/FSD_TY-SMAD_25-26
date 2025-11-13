// src/pages/Notifications.jsx

import React from 'react';
import { Bell, CheckCircle, Info } from 'lucide-react';

const Notifications = () => {
  // Dummy data for notifications (can be fetched dynamically later)
  const notifications = [
    {
      id: 1,
      icon: <CheckCircle size={24} color="#10B981" />,
      message: "You've successfully completed the 'JavaScript Basics' course!",
      time: "2 hours ago"
    },
    {
      id: 2,
      icon: <Info size={24} color="#F59E0B" />,
      message: "A new course on 'React for Beginners' is now available.",
      time: "1 day ago"
    }
  ];

  return (
    <div className="container py-5">
      {/* Page Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3" style={{ color: '#4B0082' }}>
          <Bell size={40} className="me-2" /> Notifications
        </h1>
        <p className="text-muted">Stay updated with your learning journey</p>
      </div>

      {/* Notification List */}
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {notifications.length > 0 ? (
            <div className="list-group">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="list-group-item list-group-item-action d-flex align-items-start p-4 rounded-4 mb-3 shadow-sm"
                >
                  <div className="me-3">{notification.icon}</div>
                  <div className="flex-grow-1">
                    <p className="mb-1 fw-semibold" style={{ color: '#4B0082' }}>
                      {notification.message}
                    </p>
                    <small className="text-muted">{notification.time}</small>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5 bg-light rounded-4 shadow-sm">
              <Bell size={48} className="text-muted mb-3" />
              <h5 className="fw-bold mb-2" style={{ color: '#4B0082' }}>No Notifications Yet</h5>
              <p className="text-muted">You're all caught up for now. Check back later!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;

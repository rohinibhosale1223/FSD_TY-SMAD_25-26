import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn && storedUser) setUser(storedUser);
    else navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <div className="container mt-5 pt-5">
      {user && (
        <>
          <h2 className="text-center fw-bold text-primary mb-4">👤 My Profile</h2>

          <div className="card shadow-lg p-4 mb-4">
            <h4 className="text-secondary">Personal Information</h4>
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Date of Birth:</strong> {user.dob}</p>
            <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
          </div>

          <div className="card shadow-lg p-4 mb-4">
            <h4 className="text-secondary">Contact Information</h4>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Alternate Phone:</strong> {user.altPhone}</p>
            <p><strong>Emergency Contact:</strong> {user.emergencyContact}</p>
            <p><strong>Address:</strong> {user.address}, {user.city}, {user.state}, {user.country} - {user.pincode}</p>
          </div>

          <div className="card shadow-lg p-4 mb-4">
            <h4 className="text-secondary">Health Information</h4>
            <p><strong>Allergies:</strong> {user.allergies}</p>
            <p><strong>Medical History:</strong> {user.medicalHistory}</p>
          </div>

          <div className="card shadow-lg p-4 mb-4">
            <h4 className="text-secondary">Professional Information</h4>
            <p><strong>Occupation:</strong> {user.occupation}</p>
            <p><strong>Organization:</strong> {user.organization}</p>
            <p><strong>Annual Income:</strong> ₹{user.annualIncome}</p>
          </div>

          <div className="text-center">
            <button className="btn btn-danger px-4 fw-bold" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;

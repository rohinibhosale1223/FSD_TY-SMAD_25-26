import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",

  
    phone: "",
    altPhone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",

  
    bloodGroup: "",
    allergies: "",
    medicalHistory: "",
    emergencyContact: "",

  
    occupation: "",
    organization: "",
    annualIncome: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(formData));
    alert("✅ Registration success/ful! Please login.");
    navigate("/login");
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4 fw-bold text-primary">📝 User Registration</h2>
      <form className="shadow p-4 rounded bg-light mb-5" onSubmit={handleSignup}>
        
        <h4 className="text-secondary mb-3">Personal Information</h4>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input type="text" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange}/>
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input type="text" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange}/>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">Gender</label>
            <select name="gender" className="form-select" value={formData.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Date of Birth</label>
            <input type="date" name="dob" className="form-control" value={formData.dob} onChange={handleChange}/>
          </div>
          <div className="col-md-4">
            <label className="form-label">Blood Group</label>
            <input type="text" name="bloodGroup" className="form-control" value={formData.bloodGroup} onChange={handleChange}/>
          </div>
        </div>

        <h4 className="text-secondary mt-4 mb-3">Contact Information</h4>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange}/>
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange}/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Alternate Phone</label>
            <input type="text" name="altPhone" className="form-control" value={formData.altPhone} onChange={handleChange}/>
          </div>
          <div className="col-md-6">
            <label className="form-label">Emergency Contact</label>
            <input type="text" name="emergencyContact" className="form-control" value={formData.emergencyContact} onChange={handleChange}/>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea name="address" className="form-control" value={formData.address} onChange={handleChange}></textarea>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">City</label>
            <input type="text" name="city" className="form-control" value={formData.city} onChange={handleChange}/>
          </div>
          <div className="col-md-4">
            <label className="form-label">State</label>
            <input type="text" name="state" className="form-control" value={formData.state} onChange={handleChange}/>
          </div>
          <div className="col-md-4">
            <label className="form-label">Country</label>
            <input type="text" name="country" className="form-control" value={formData.country} onChange={handleChange}/>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Pincode</label>
          <input type="text" name="pincode" className="form-control" value={formData.pincode} onChange={handleChange}/>
        </div>

        <h4 className="text-secondary mt-4 mb-3">Professional & Health Info</h4>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Occupation</label>
            <input type="text" name="occupation" className="form-control" value={formData.occupation} onChange={handleChange}/>
          </div>
          <div className="col-md-6">
            <label className="form-label">Organization</label>
            <input type="text" name="organization" className="form-control" value={formData.organization} onChange={handleChange}/>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Annual Income</label>
            <input type="text" name="annualIncome" className="form-control" value={formData.annualIncome} onChange={handleChange}/>
          </div>
          <div className="col-md-6">
            <label className="form-label">Allergies</label>
            <input type="text" name="allergies" className="form-control" value={formData.allergies} onChange={handleChange}/>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Medical History</label>
          <textarea name="medicalHistory" className="form-control" value={formData.medicalHistory} onChange={handleChange}></textarea>
        </div>

        <h4 className="text-secondary mt-4 mb-3">Password Setup</h4>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange}/>
          </div>
          <div className="col-md-6">
            <label className="form-label">Confirm Password</label>
            <input type="password" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange}/>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-bold mt-3">
          Register
        </button>
      </form>
    </div>
  );
}

export default Signup;

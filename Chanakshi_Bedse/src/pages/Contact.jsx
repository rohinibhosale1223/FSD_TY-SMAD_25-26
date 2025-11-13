import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    // In a real application, you would send this data to a backend API here.
    setIsSubmitted(true);
    // setFormData({ name: '', email: '', message: '' }); // Optionally reset form
  };

  if (isSubmitted) {
    return (
      <div className="form-container">
        <div className="auth-form" style={{ textAlign: 'center' }}>
          <h2>Thank You!</h2>
          <p>Your message has been received. We will get back to you shortly.</p>
          <button onClick={() => setIsSubmitted(false)} style={{ marginTop: '20px' }}>
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          rows="4" 
          style={{ width: '100%', padding: '10px', border: '1px solid #ced4da', borderRadius: '6px', marginTop: '5px' }}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
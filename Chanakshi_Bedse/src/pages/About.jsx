
import React from "react";

function About() {
  return (
    <div className="page about-page">
      <h2>About Our E-Learning Marketplace</h2>
      
      <p style={{fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px', maxWidth: '800px'}}>
        We are dedicated to providing high-quality, accessible, and affordable online education for everyone. 
        Our platform connects passionate instructors with ambitious students across the globe, offering courses in 
        the most in-demand fields, including web development, data science, and cloud computing.
      </p>

      <div style={{display: 'flex', gap: '40px', marginTop: '40px'}}>
        <section style={{flex: 1, padding: '20px', borderLeft: '3px solid #007bff'}}>
          <h3>Our Mission</h3>
          <p style={{color: '#6c757d'}}>
            To democratize education by offering a vast library of practical, project-based courses that lead to real career growth. We believe in learning by doing.
          </p>
        </section>
        <section style={{flex: 1, padding: '20px', borderLeft: '3px solid #4CAF50'}}>
          <h3>Our Vision</h3>
          <p style={{color: '#6c757d'}}>
            To be the world's leading platform for continuous professional development, known for innovation and student success.
          </p>
        </section>
      </div>

      <h3 style={{marginTop: '50px', borderTop: '1px solid #eee', paddingTop: '30px'}}>Why Choose Us?</h3>
      <ul style={{paddingLeft: '20px', listStyleType: 'disc', color: '#343a40'}}>
        <li style={{marginBottom: '10px'}}>Industry Expert Instructors</li>
        <li style={{marginBottom: '10px'}}>Lifetime Access to Course Materials</li>
        <li style={{marginBottom: '10px'}}>Certificate of Completion for Every Course</li>
        <li style={{marginBottom: '10px'}}>Responsive Support Community</li>
      </ul>
    </div>
  );
}

export default About;
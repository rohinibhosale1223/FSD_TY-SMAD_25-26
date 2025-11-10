import React from "react";
import "./AboutPage.css";

export const AboutPage = () => {
  return (
    <div className="about-wrapper">
      <div className="about-card">
        <h2>🌐 About EventHub</h2>
        <p>
          <strong>EventHub</strong> is your one-stop platform for discovering,
          booking, and managing exciting events happening around you. 
        </p>

        <section className="mission">
          <h3>🎯 Our Mission</h3>
          <p>
            To make event discovery seamless and enjoyable. We bring
            communities together by promoting events that inspire, educate, and
            entertain.
          </p>
        </section>

        <section className="team">
          <h3>👥 Meet Our Team</h3>
          <div className="team-grid">
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=60"
                alt="Founder"
              />
              <h4>Isha Yadav</h4>
              <p>Founder & Project Lead</p>
            </div>
            <div className="team-member">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.gLlBMs5P_8rGqbovlfKyGQHaE7?w=285&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                alt="Designer"
              />
              <h4>Neha Yadav</h4>
              <p>UI/UX Designer</p>
            </div>
            <div className="team-member">
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.os7uM5TJXlUufJbHt9t7UAHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                alt="Developer"
              />
              <h4>Priya Mehta</h4>
              <p>Frontend Developer</p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h3>📩 Contact Us</h3>
          <p>
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <a href="mailto:support@eventhub.com" className="contact-btn">
            ✉️ support@eventhub.com
          </a>
        </section>
      </div>
    </div>
  );
};

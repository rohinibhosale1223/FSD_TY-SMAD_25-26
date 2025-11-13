import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard.jsx"; 
import { COURSES_DATA } from "../data.js"; // Import data

function Home() {
  // Take the first two courses for a 'Featured' section
  const featuredCourses = COURSES_DATA.slice(0, 2);

  return (
    <div className="home-page">
      <section className="home-hero">
        <h1>Learn the World's Best Skills Online.</h1>
        <p>Expert-led courses from top universities and companies. Start your journey today.</p>
        <Link to="/courses">
          <button>Explore All Courses</button>
        </Link>
      </section>

      <section className="page home-featured">
        <h2 style={{textAlign: 'center', marginBottom: '30px', fontSize: '2rem', color: '#333'}}>
            Our Featured Courses
        </h2>
        
        {/* Uses the new courses-grid for a clean layout */}
        <div className="courses-grid">
            {featuredCourses.map(course => (
                 <CourseCard
                    key={course.id}
                    title={course.title}
                    category={course.category}
                    short={course.short}
                    price={course.price}
                    duration={course.duration}
                    level={course.level}
                    image={course.image}
                />
            ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

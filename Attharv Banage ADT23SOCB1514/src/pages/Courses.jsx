import { useState } from "react";

export default function Courses() {
  const [courses] = useState([
    {
      id: 1,
      title: "Arrays & Strings Fundamentals",
      price: "₹499",
      image:
          "https://i.ytimg.com/vi/Cy3A3p0mNkY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLARRWGeO15R52Xrux1oINuiTs6_Jw",
        
    },
    {
      id: 2,
      title: "Recursion & Backtracking",
      price: "₹599",
      image:
        "https://heycoach.in/blog/wp-content/uploads/2024/08/Recursion-Backtracking.png",
    },
    {
      id: 3,
      title: "Sorting Algorithms & Searching",
      price: "₹549",
      image:
        "https://miro.medium.com/1*k54o6Y0a6ifDD8qJFBu4Fg.png",
    },
    {
      id: 4,
      title: "Dynamic Programming",
      price: "₹699",
      image:
        "https://res.cloudinary.com/codecrucks/images/f_webp,q_auto/v1635307877/dynamic-programming/dynamic-programming.jpg?_i=AA",
    },
    {
      id: 5,
      title: "Graph Algorithms",
      price: "₹749",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDKKlmj5pFecludquN-B63ONsgrPeP1tljZtwbXJQP7peEEqpUQF5mkaCOSEYDJggwiU&usqp=CAU",
    },
    {
      id: 6,
      title: "Trees & Binary Search Trees",
      price: "₹599",
      image:
        "https://cdn-media-1.freecodecamp.org/images/2rTqYlcrnWtICedt131tDft0CmkzZaViExJX",
    },
  ]);

  const addToCart = (course) => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    items.push(course);
    localStorage.setItem("cartItems", JSON.stringify(items));
    window.dispatchEvent(new Event("cartUpdated"));
    alert(`${course.title} added to cart!`);
  };

  return (
    <div className="container mt-5 pt-5 text-light">
      <h2 className="text-warning mb-4 text-center">Explore Our Courses</h2>

      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card bg-dark text-light shadow-lg border-0">
              <img
                src={course.image}
                alt={course.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text fw-bold">{course.price}</p>
                <button
                  className="btn btn-warning w-100 fw-semibold"
                  onClick={() => addToCart(course)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

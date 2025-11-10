import { useEffect, useState } from "react";

export default function Home() {
  const [featuredCourses, setFeaturedCourses] = useState([]);

  useEffect(() => {
    // simple demo data
    setFeaturedCourses([
      {
        id: 1,
        title: "Mastering Arrays & Strings",
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
        title: "Dynamic Programming Deep Dive",
        price: "₹699",
        image:
          "https://res.cloudinary.com/codecrucks/images/f_webp,q_auto/v1635307877/dynamic-programming/dynamic-programming.jpg?_i=AA",
      },
    ]);
  }, []);

  const addToCart = (course) => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    items.push(course);
    localStorage.setItem("cartItems", JSON.stringify(items));
    window.dispatchEvent(new Event("cartUpdated"));
    alert(`${course.title} added to cart!`);
  };

  return (
    <div className="container mt-5 pt-5 text-light">
      <div className="text-center mb-5">
        <h1 className="text-warning fw-bold">Welcome to DSA Learning</h1>
        <p className="lead">
          Learn Data Structures & Algorithms through interactive and visual examples.
        </p>
      </div>

      <h3 className="text-warning mb-4">Featured Courses</h3>
      <div className="row">
        {featuredCourses.map((c) => (
          <div key={c.id} className="col-md-4 mb-4">
            <div className="card bg-dark text-light shadow-lg border-0">
              <img
                src={c.image}
                alt={c.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{c.title}</h5>
                <p className="card-text">{c.price}</p>
                <button
                  className="btn btn-warning w-100 fw-semibold"
                  onClick={() => addToCart(c)}
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

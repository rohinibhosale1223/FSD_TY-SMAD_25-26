import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Destinations() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  const destinations = useMemo(() => [
    { name: "Paris, France", image: "/images/paris.jpg", desc: "Enjoy the city of love with iconic landmarks like the Eiffel Tower and the Louvre." },
    { name: "Tokyo, Japan", image: "/images/tokyo.jpg", desc: "Experience vibrant culture, tech-forward districts and timeless temples." },
    { name: "Dubai, UAE", image: "/images/dubai.jpg", desc: "Explore luxury shopping, desert safaris and world-class architecture." },
    { name: "India", image: "/images/india.jpg", desc: "A vibrant, sensory-rich destination full of culture, food and diverse landscapes." },
    { name: "New York, USA", image: "/images/cityscape.jpg", desc: "See Times Square, Central Park and iconic skyline experiences." },
    { name: "Bali, Indonesia", image: "/images/beach.jpg", desc: "Tropical beaches, temples and relaxed island life." },
    { name: "Rome, Italy", image: "/images/rome.jpg", desc: "Walk through history visiting the Colosseum and Vatican." },
    { name: "Cape Town, South Africa", image: "/images/mountains.jpg", desc: "Table Mountain, coastal scenery and wildlife experiences." },
    { name: "London, UK", image: "/images/london.jpg", desc: "Big Ben, the London Eye and world-class museums." },
    { name: "Switzerland", image: "/images/switzerland.jpg", desc: "Alpine vistas, lakes and charming villages." },
    { name: "Santorini, Greece", image: "/images/santorini.jpg", desc: "Whitewashed houses, blue domes and breathtaking sunsets over the Aegean." },
    { name: "Machu Picchu, Peru", image: "/images/machu.jpg", desc: "Ancient Incan citadel set high in the Andes — a bucket-list archaeological wonder." }
  ], []);

  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return destinations.filter(d =>
      d.name.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q)
    );
  }, [query, destinations]);

  function handleImgError(e) {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "/images/placeholder.jpg";
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <header className="text-center bg-white py-5">
        <div className="container">
          <h1 className="display-6 fw-bold text-primary mb-3" data-aos="fade-down">
            Top Travel Destinations
          </h1>
          <p className="text-muted mb-3" data-aos="fade-up">
            Discover curated destinations — beach escapes, city breaks, nature retreats, and more.
          </p>

          <div className="row justify-content-center mt-4" data-aos="fade-up" data-aos-delay="100">
            <div className="col-11 col-md-8 col-lg-6">
              <div className="input-group shadow-sm rounded-pill overflow-hidden">
                <input
                  type="search"
                  className="form-control border-0"
                  placeholder="Search destinations or features (e.g. 'beach', 'Rome', 'mountain')"
                  aria-label="Search destinations"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-4">
        {query.trim() ? (
          <section className="mb-4" data-aos="fade-up">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5 className="mb-0">Search results for <span className="text-primary">“{query}”</span></h5>
              <small className="text-muted">{results.length} match{results.length !== 1 ? "es" : ""}</small>
            </div>

            {results.length === 0 ? (
              <div className="alert alert-warning py-2">No destinations match your search. Try another term.</div>
            ) : (
              <div className="list-group">
                {results.map((r, idx) => (
                  <div key={idx} className="list-group-item list-group-item-action d-flex align-items-start gap-3">
                    <img
                      src={r.image}
                      alt={r.name}
                      style={{ width: 96, height: 64, objectFit: "cover", borderRadius: 8 }}
                      loading="lazy"
                      onError={handleImgError}
                    />
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start">
                        <h6 className="mb-1">{r.name}</h6>
                        <a href="/booking" className="btn btn-sm btn-outline-primary">Book</a>
                      </div>
                      <p className="mb-0 text-muted small">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ) : null}

        <section data-aos="fade-up">
          <div className="row g-4">
            {destinations.map((d, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i} data-aos="zoom-in" data-aos-delay={i * 40}>
                <article className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="card-img-top"
                    style={{ height: 220, objectFit: "cover" }}
                    loading="lazy"
                    onError={handleImgError}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-primary">{d.name}</h5>
                    <p className="card-text text-muted mb-3">{d.desc}</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <a href="/booking" className="btn btn-primary">Book Now</a>
                      <small className="text-muted">Popular</small>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

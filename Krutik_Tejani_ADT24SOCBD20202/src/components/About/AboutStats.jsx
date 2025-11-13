const AboutStats = () => {
  const stats = [
    { id: 1, number: "50K+", label: "Happy Customers" },
    { id: 2, number: "5000+", label: "Products" },
    { id: 3, number: "100+", label: "Brands" },
    { id: 4, number: "4.9★", label: "Rating" }
  ];

  return (
    <section className="about-stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map(stat => (
            <div key={stat.id} className="stat-box">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
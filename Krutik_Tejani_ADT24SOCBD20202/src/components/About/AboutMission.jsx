const AboutMission = () => {
  const missions = [
    {
      id: 1,
      icon: "🎯",
      title: "Our Mission",
      description: "To provide high-quality, safe, and educational toys that spark creativity and joy in children worldwide."
    },
    {
      id: 2,
      icon: "👁️",
      title: "Our Vision",
      description: "To become the most trusted toy destination where families find products that grow with their children."
    },
    {
      id: 3,
      icon: "💎",
      title: "Our Values",
      description: "Quality, Safety, Innovation, and Customer Satisfaction are at the heart of everything we do."
    }
  ];

  return (
    <section className="about-mission">
      <div className="container">
        <div className="mission-grid">
          {missions.map(mission => (
            <div key={mission.id} className="mission-card">
              <div className="mission-icon">{mission.icon}</div>
              <h3 className="mission-title">{mission.title}</h3>
              <p className="mission-description">{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
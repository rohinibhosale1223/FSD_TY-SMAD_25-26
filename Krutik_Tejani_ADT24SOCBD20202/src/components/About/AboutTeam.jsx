const AboutTeam = () => {
  const team = [
    {
      id: 1,
      name: "KRUTIK TEJANI",
      role: "Founder & CEO",
      avatar: "👨‍💼",
      description: "Passionate about creating memorable childhood experiences"
    },
    {
      id: 2,
      name: "PRIYAL SAVANI",
      role: "Product Director",
      avatar: "👩‍💼",
      description: "Expert in toy safety and quality assurance"
    },
    {
      id: 3,
      name: "ARCHIE TEJANI",
      role: "Customer Success",
      avatar: "👩‍💻",
      description: "Dedicated to exceptional customer experiences"
    },
    {
      id: 4,
      name: "RAHUL JOSHI",
      role: "Operations Manager",
      avatar: "👨‍🔧",
      description: "Ensuring smooth delivery and logistics"
    }
  ];

  return (
    <section className="about-team">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Dedicated professionals committed to bringing joy to families
          </p>
        </div>
        <div className="team-grid">
          {team.map(member => (
            <div key={member.id} className="team-card">
              <div className="team-avatar">{member.avatar}</div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
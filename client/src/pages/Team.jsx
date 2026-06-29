import TeamOrgChart from "../components/TeamOrgChart";
import "./Team.css";

function Team() {
  const visionaries = [
    {
      id: 1,
      name: "Dr. Elena Vance",
      role: "Chief Strategy Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "With 20 years in international development, Elena crafts our overarching operational framework to ensure scalability and critical growth.",
    },
    {
      id: 2,
      name: "Marcus Thorne",
      role: "Head of Innovation",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      bio: "A pioneer in blockchain-for-good, Marcus leads our technical division, integrating transparent aid tracking into every project.",
    },
    {
      id: 3,
      name: "Sarah Al-Fayed",
      role: "Director of Partnerships",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      bio: "Sarah bridges the gap between private capital and humanitarian need, building alliances that multiply our reach across five continents.",
    },
  ];

  const deploymentUnit = [
    {
      id: 1,
      name: "Javier Mendez",
      role: "Logistics Lead, LATAM",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      bio: "Former RED CROSS logistics director specialized in rapid-response supply chains in remote Amazonian regions.",
    },
    {
      id: 2,
      name: "Dr. Maya Chen",
      role: "Medical Response Chief",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
      bio: "Coordinating our mobile health units, Maya ensures that medical technology reaches the most isolated communities.",
    },
    {
      id: 3,
      name: "Simon Okafor",
      role: "Infrastructure Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Simon designs and deploys sustainable energy and water grids that function in extreme climates and high-stress scenarios.",
    },
    {
      id: 4,
      name: "Ingrid Bjorn",
      role: "Comms Security",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Protecting our teams' data and ensuring unbroken communication lines in areas with zero traditional infrastructure.",
    },
  ];

  return (
    <div className="page-wrapper team-page">
      <div className="container">
        {/* Hero Header */}
        <div className="team-hero">
          <div className="team-badge">💧 MEET THE GUARDIANS</div>
          <h1 className="team-title">
            Driven by <span className="highlight-blue-italic">the Best.</span>
          </h1>
          <p className="team-desc">
            Meet the minds and hearts fueling global change. From field strategists to
            visionary architects, our collective power is rooted in radical empathy and
            technical precision.
          </p>
        </div>

        {/* Strategic Visionaries */}
        <div className="team-sec">
          <div className="team-section-row">
            <div>
              <h2 className="team-sec-title">Strategic Visionaries</h2>
              <p className="team-sec-subtitle">
                Architecting the long-term blueprint for sustainable global impact and
                innovation.
              </p>
            </div>
            <span className="team-sec-badge">Executive Leadership</span>
          </div>

          <div className="visionaries-grid">
            {visionaries.map((member) => (
              <div key={member.id} className="visionary-card">
                <div>
                  <div className="avatar-ring-wrapper">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3 className="vis-name">{member.name}</h3>
                  <p className="vis-role">{member.role}</p>
                  <p className="vis-bio">{member.bio}</p>
                </div>
                <div className="vis-socials">
                  <span>🌐</span>
                  <span>✉️</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Deployment Unit */}
        <div className="team-sec">
          <div className="team-section-row">
            <div>
              <h2 className="team-sec-title">Global Deployment Unit</h2>
              <p className="team-sec-subtitle">
                The ground-level experts delivering resources and expertise where they're
                needed most.
              </p>
            </div>
            <span className="team-sec-badge">Field Operations</span>
          </div>

          <div className="deployment-grid">
            {deploymentUnit.map((member) => (
              <div key={member.id} className="deploy-card">
                <div className="deploy-img-wrapper">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="deploy-body">
                  <h3 className="deploy-name">{member.name}</h3>
                  <p className="deploy-role">{member.role}</p>
                  <p className="deploy-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Organizational Structure Chart */}
        <TeamOrgChart />

        {/* Join the Collective */}
        <div className="join-collective-card">
          <h2 className="jc-title">Join the Collective</h2>
          <p className="jc-desc">
            We're always looking for brilliant minds to join our mission. Our deployment
            rate is currently at peak capacity.
          </p>
          <div className="jc-progress-box">
            <div className="jc-progress-labels">
              <span>Current Mission Capacity</span>
              <span>94%</span>
            </div>
            <div className="jc-progress-bar">
              <div className="jc-progress-fill" style={{ width: "94%" }}></div>
            </div>
          </div>
          <button className="btn-careers">VIEW CAREER OPENINGS</button>
        </div>
      </div>
    </div>
  );
}

export default Team;

import TeamOrgChart from "../components/TeamOrgChart";
import "./Team.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";   

import JoinButton from "../components/Join.jsx"

function Team() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const visionaries = [
    {
      id: 1,
      name: "Jitisha Sannyashi",
      role: "Directorate of Program & Research",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "With 20 years in international development, Elena crafts our overarching operational framework to ensure scalability and critical growth.",
      path: "/team/program_research",
    },
    {
      id: 2,
      name: "Mayukh Das",
      role: "Directorate of Regional Circles",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      bio: "A pioneer in blockchain-for-good, Marcus leads our technical division, integrating transparent aid tracking into every project.",
      path: "/team/regional_circles",
    },
    {
      id: 3,
      name: "Nitopal Mazumdar",
      role: "Directorate of College Units",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      bio: "Sarah bridges the gap between private capital and humanitarian need, building alliances that multiply our reach across five continents.",
      path: "/team/college_units",
    },
    {
      id: 4,
      name: "Hritupon",
      role: "Directorate of Core Admin & Establishment",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      bio: "Sarah bridges the gap between private capital and humanitarian need, building alliances that multiply our reach across five continents.",
      path: "/team/core_admin",
    },
  ];

  return (
    <div className="page-wrapper team-page">
      <div className="container">
        {/* Hero Header */}
        <div className="team-hero">
          <h1 className="team-title">
            Driven by <span className="highlight-blue-italic">the Best.</span>
          </h1>
          <p className="team-desc">
            Meet the minds and hearts fueling global change. From field strategists to
            visionary architects, our collective power is rooted in radical empathy and
            technical precision.
          </p>
        </div>

        <TeamOrgChart />

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
              <div key={member.id} className="visionary-card" onClick={()=> navigate(member.path || "/")}>
                <div>
                  <div className="avatar-ring-wrapper" onClick={()=> navigate(member.path || "/")}>
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

        

        {/* Join the Collective */}
        <JoinButton/>
      </div>
    </div>
  );
}

export default Team;
